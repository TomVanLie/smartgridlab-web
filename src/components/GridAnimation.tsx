'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number; y: number
  type: 'meter' | 'concentrator' | 'substation' | 'control' | 'router'
  vx: number; vy: number
  pulsePhase: number
}
interface Edge { from: number; to: number; particles: Particle[]; flowOffset: number }
interface Particle { t: number; speed: number; alpha: number }

const NODE_RADII = { meter: 2.5, concentrator: 4.5, substation: 6, control: 9, router: 3.5 }

function buildTopology(w: number, h: number): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = []
  const cx = w * 0.5, cy = h * 0.5

  nodes.push({ x: cx, y: cy, type: 'control', vx: 0, vy: 0, pulsePhase: 0 })

  const subAngles = [0, Math.PI * 0.67, Math.PI * 1.33]
  subAngles.forEach((a, i) => nodes.push({
    x: cx + Math.cos(a) * w * 0.22, y: cy + Math.sin(a) * h * 0.22,
    type: 'substation', vx: (Math.random()-.5)*0.04, vy: (Math.random()-.5)*0.04, pulsePhase: i*2,
  }))

  const routerAngles = [Math.PI*0.33, Math.PI, Math.PI*1.67]
  routerAngles.forEach((a, i) => nodes.push({
    x: cx + Math.cos(a)*w*0.32, y: cy + Math.sin(a)*h*0.3,
    type: 'router', vx: (Math.random()-.5)*0.05, vy: (Math.random()-.5)*0.05, pulsePhase: i*1.3,
  }))

  for (let s = 0; s < 3; s++) {
    const sub = nodes[1 + s]
    const concAngles = [0, Math.PI*0.8, Math.PI*1.6]
    concAngles.forEach((a, i) => {
      if (nodes.filter(n=>n.type==='concentrator').length >= 5) return
      nodes.push({
        x: sub.x + Math.cos(a)*w*0.11, y: sub.y + Math.sin(a)*h*0.11,
        type: 'concentrator', vx: (Math.random()-.5)*0.06, vy: (Math.random()-.5)*0.06, pulsePhase: i+s*0.7,
      })
    })
  }

  const concNodes = nodes.filter(n => n.type === 'concentrator')
  concNodes.forEach((conc, ci) => {
    const mCount = ci < 2 ? 3 : 2
    for (let m = 0; m < mCount; m++) {
      const a = (m/mCount)*Math.PI*2 + ci*0.5
      nodes.push({
        x: conc.x + Math.cos(a)*w*0.07, y: conc.y + Math.sin(a)*h*0.07,
        type: 'meter', vx: (Math.random()-.5)*0.08, vy: (Math.random()-.5)*0.08, pulsePhase: m+ci,
      })
    }
  })

  const edges: Edge[] = []
  const addEdge = (from: number, to: number) =>
    edges.push({ from, to, particles: [], flowOffset: Math.random() })

  for (let i=1;i<=3;i++) addEdge(i,0)
  for (let r=4;r<=6;r++) {
    const rn = nodes[r]; let best=1, bd=Infinity
    for (let s=1;s<=3;s++) { const d=Math.hypot(nodes[s].x-rn.x,nodes[s].y-rn.y); if(d<bd){bd=d;best=s} }
    addEdge(r, best)
  }
  nodes.forEach((n,i) => {
    if (n.type!=='concentrator') return
    let best=1, bd=Infinity
    nodes.forEach((m,j)=>{ if(m.type!=='substation'&&m.type!=='router') return; const d=Math.hypot(m.x-n.x,m.y-n.y); if(d<bd){bd=d;best=j} })
    addEdge(i, best)
  })
  nodes.forEach((n,i) => {
    if (n.type!=='meter') return
    let best=0, bd=Infinity
    nodes.forEach((m,j)=>{ if(m.type!=='concentrator') return; const d=Math.hypot(m.x-n.x,m.y-n.y); if(d<bd){bd=d;best=j} })
    addEdge(i, best)
  })

  edges.forEach(e => {
    const count = 1+Math.floor(Math.random()*2)
    for (let i=0;i<count;i++) e.particles.push({ t:Math.random(), speed:0.0015+Math.random()*0.001, alpha:0.6+Math.random()*0.4 })
  })

  return { nodes, edges }
}

interface Props { theme: 'dark' | 'light' }

export default function GridAnimation({ theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const dataRef = useRef<{ nodes: Node[]; edges: Edge[] } | null>(null)
  const timeRef = useRef(0)
  const themeRef = useRef(theme)

  useEffect(() => { themeRef.current = theme }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      dataRef.current = buildTopology(canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const getColors = () => {
      const dark = themeRef.current === 'dark'
      return {
        r: dark ? 0 : 0,
        g: dark ? 200 : 80,
        b: dark ? 255 : 150,
      }
    }

    const draw = () => {
      if (!dataRef.current) return
      const { nodes, edges } = dataRef.current
      const W = canvas.width, H = canvas.height
      timeRef.current += 1
      const { r, g, b } = getColors()
      const rgba = (a: number) => `rgba(${r},${g},${b},${a})`

      ctx.clearRect(0, 0, W, H)

      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        const m = 60
        if (n.x<m||n.x>W-m) n.vx*=-1
        if (n.y<m||n.y>H-m) n.vy*=-1
      })

      edges.forEach(e => {
        const a = nodes[e.from], b2 = nodes[e.to]
        const alpha = 0.12 + 0.04*Math.sin(timeRef.current*0.005 + e.flowOffset*6)
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b2.x,b2.y)
        ctx.strokeStyle = rgba(alpha); ctx.lineWidth = 0.7; ctx.stroke()

        e.particles.forEach(p => {
          p.t += p.speed; if (p.t>1) p.t-=1
          const px = a.x+(b2.x-a.x)*p.t, py = a.y+(b2.y-a.y)*p.t
          ctx.beginPath(); ctx.arc(px,py,1.5,0,Math.PI*2)
          ctx.fillStyle = rgba(p.alpha); ctx.fill()
          const trail = 0.06
          const tx = a.x+(b2.x-a.x)*Math.max(0,p.t-trail)
          const ty = a.y+(b2.y-a.y)*Math.max(0,p.t-trail)
          const grad = ctx.createLinearGradient(tx,ty,px,py)
          grad.addColorStop(0, rgba(0)); grad.addColorStop(1, rgba(p.alpha*0.4))
          ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(px,py)
          ctx.strokeStyle = grad; ctx.lineWidth = 1; ctx.stroke()
        })
      })

      nodes.forEach(n => {
        const radius = NODE_RADII[n.type]
        const pulse = Math.sin(timeRef.current*0.02+n.pulsePhase)*0.5+0.5

        const glow = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,radius*4)
        glow.addColorStop(0, rgba(0.06*pulse)); glow.addColorStop(1, rgba(0))
        ctx.beginPath(); ctx.arc(n.x,n.y,radius*4,0,Math.PI*2)
        ctx.fillStyle = glow; ctx.fill()

        ctx.beginPath(); ctx.arc(n.x,n.y,radius,0,Math.PI*2)
        ctx.fillStyle = rgba(0.5+0.2*pulse); ctx.fill()

        ctx.beginPath(); ctx.arc(n.x,n.y,radius*0.4,0,Math.PI*2)
        ctx.fillStyle = rgba(0.7+0.3*pulse); ctx.fill()

        if (n.type==='substation'||n.type==='control') {
          const s = radius*1.8
          ctx.strokeStyle = rgba(0.2+0.1*pulse); ctx.lineWidth = 0.5
          ctx.strokeRect(n.x-s/2,n.y-s/2,s,s)
        }
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block', opacity: theme === 'dark' ? 0.6 : 0.35 }}
    />
  )
}
