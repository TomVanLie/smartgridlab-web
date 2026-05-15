const cs = {
  lang: 'cs',
  meta: {
    title: 'SmartGridLab – Výzkum komunikace a kybernetické bezpečnosti chytrých sítí',
    description:
      'Výzkumná laboratoř VUT FEKT zaměřená na komunikační systémy pro AMI, bezpečnostní testování elektroměrů, analýzu průmyslových protokolů a monitoring energetické infrastruktury.',
  },
  nav: {
    research: 'Výzkum',
    about: 'O laboratoři',
    infrastructure: 'Infrastruktura',
    projects: 'Projekty',
    education: 'Vzdělávání',
    contact: 'Kontakt',
  },
  hero: {
    label: 'VUT FEKT — Ústav telekomunikací',
    headline: 'Výzkum komunikace a kybernetické bezpečnosti chytrých sítí',
    subheadline:
      'Navrhujeme, testujeme a zabezpečujeme komunikační systémy pro energetickou infrastrukturu, chytré elektroměry a průmyslové sítě.',
    ctaResearch: 'Náš výzkum',
    ctaContact: 'Kontaktovat laboratoř',
    statusItems: [
      { label: 'Stav systémů', value: 'OPERAČNÍ' },
      { label: 'Aktivní protokoly', value: 'IEC 61850 / DLMS' },
      { label: 'Testovací prostředí', value: 'ONLINE' },
    ],
  },
  about: {
    sectionLabel: '01 — O laboratoři',
    title: 'Výzkum komunikace a bezpečnosti energetické infrastruktury',
    description:
      'SmartGridLab je výzkumná a testovací laboratoř Fakulty elektrotechniky a komunikačních technologií VUT v Brně, součást Ústavu telekomunikací. Zaměřujeme se na komunikační systémy pro pokročilou měřicí infrastrukturu (AMI), kybernetickou bezpečnost chytrých sítí a monitoring energetické infrastruktury.',
    description2:
      'Kombinujeme základní akademický výzkum s aplikovanými projekty v průmyslovém partnerství. Naše aktivity zahrnují vývoj a testování komunikačních platforem, bezpečnostní evaluaci elektroměrů, analýzu průmyslových protokolů, výzkum metod detekce anomálií a simulaci chování energetické sítě. Výsledky výzkumu nacházejí přímé uplatnění u energetických distribučních společností a výrobců AMI systémů.',
    tags: [
      'Komunikační systémy AMI',
      'Bezpečnostní testování elektroměrů',
      'Smart Grid',
      'DLMS/COSEM',
      'IEC 61850',
      'PLC komunikace',
      'RF Mesh / NB-IoT / LTE-M',
      'Kybernetická bezpečnost',
      'Průmyslové protokoly',
      'Monitoring energetické infrastruktury',
      'Dynamické systémové modely',
      'Komunitní energetika',
    ],
    stats: [
      { value: 'AMI', label: 'Advanced Metering Infrastructure' },
      { value: 'IEC', label: '61850 / DLMS / PLC' },
      { value: 'TAČR', label: 'Aplikovaný výzkum s průmyslem' },
      { value: 'VUT', label: 'Ústav telekomunikací FEKT' },
    ],
  },
  research: {
    sectionLabel: '02 — Oblast výzkumu',
    title: 'Výzkumné oblasti',
    subtitle:
      'Naše výzkumné aktivity pokrývají celý komunikační a bezpečnostní ekosystém chytré energetiky – od fyzické vrstvy přenosu dat po bezpečnostní architektury.',
    areas: [
      {
        id: 'meter-security',
        title: 'Bezpečnostní testování elektroměrů',
        description:
          'Komplexní bezpečnostní evaluace chytrých elektroměrů a AMM zařízení: testování komunikačních rozhraní, hodnocení kryptografické implementace, analýza zranitelností a emulace chování elektroměrů pro testovací účely.',
        tags: ['AMM', 'DLMS/COSEM', 'Kryptografie', 'Emulace'],
      },
      {
        id: 'ami-comm',
        title: 'Komunikační systémy pro AMI',
        description:
          'Návrh, testování a optimalizace komunikační infrastruktury pro pokročilé měřicí systémy: PLC (PRIME, G3), RF Mesh, NB-IoT, LTE-M, M-Bus a optická rozhraní. Vývoj testovacích platforem pro AMM komunikaci.',
        tags: ['PLC', 'NB-IoT', 'LTE-M', 'RF Mesh', 'M-Bus'],
      },
      {
        id: 'grid-security',
        title: 'Kybernetická bezpečnost Smart Grid',
        description:
          'Bezpečnostní analýza komunikační architektury chytrých distribučních sítí, výzkum metod detekce průniků a anomálií, hodnocení bezpečnosti řídicích systémů dle IEC 61850 a IEC 62351.',
        tags: ['IEC 61850', 'IEC 62351', 'DNP3', 'Detekce anomálií'],
      },
      {
        id: 'dynamic-models',
        title: 'Dynamické modely pro kybernetickou bezpečnost',
        description:
          'Aplikace dynamických systémových modelů a metod strojového učení pro zajištění kybernetické bezpečnosti průmyslových a energetických systémů. Behaviorální modelování a detekce odchylek.',
        tags: ['Behaviorální modely', 'ML/AI', 'ICS Security', 'Detekce'],
      },
      {
        id: 'energy-monitoring',
        title: 'Monitoring energetické infrastruktury',
        description:
          'Systémy pro monitoring a management energetické soustavy v budovách, nemocnicích a průmyslových komplexech. Využití AI pro optimalizaci a detekci poruch.',
        tags: ['Monitoring', 'AI/ML', 'BEMS', 'Nemocnice'],
      },
      {
        id: 'protocol-analysis',
        title: 'Analýza průmyslových protokolů',
        description:
          'Hloubková analýza a testování průmyslových komunikačních protokolů: DLMS/COSEM, IEC 61850, Modbus, DNP3 a proprietárních protokolů používaných v energetice.',
        tags: ['Modbus', 'DLMS', 'IEC 61850', 'Wireshark'],
      },
      {
        id: 'distributed-energy',
        title: 'Bezpečnost distribuovaných zdrojů energie',
        description:
          'Výzkum kybernetické bezpečnosti malých distribuovaných zdrojů energie (DER), komunitní energetiky a V2G komunikace pro AC nabíjecí stanice elektromobilů.',
        tags: ['DER', 'V2G', 'Smart Charging', 'OCPP'],
      },
      {
        id: 'comm-testing',
        title: 'Testování komunikačních technologií',
        description:
          'Vývoj specializovaných testovacích platforem pro LTE-M, NB-IoT a další LPWAN technologie. Studie a výběr komunikačních řešení pro konkrétní use case v energetice.',
        tags: ['LTE-M', 'NB-IoT', 'LPWAN', 'Testovací platforma'],
      },
      {
        id: 'resilience',
        title: 'Odolnost energetické infrastruktury',
        description:
          'Hodnocení odolnosti kritické energetické infrastruktury, analýza dopadů kybernetických útoků na fyzický provoz sítě a výzkum mechanismů rychlého zotavení.',
        tags: ['CPS', 'NIS2', 'Odolnost', 'Kritická infrastruktura'],
      },
    ],
  },
  infrastructure: {
    sectionLabel: '03 — Infrastruktura',
    title: 'Laboratorní infrastruktura',
    subtitle:
      'Laboratoř disponuje komplexním testovacím prostředím pro výzkum komunikačních systémů a bezpečnosti energetické infrastruktury.',
    categories: [
      {
        title: 'Testovací zařízení',
        items: [
          'Chytré elektroměry – různí výrobci a generace (AMM/AMI)',
          'Průmyslové přepínače a komunikační prvky',
          'SDR zařízení (USRP, HackRF, RTL-SDR)',
          'Protokolové analyzátory a síťové sondy',
          'Osciloskopy a logické analyzátory',
          'PLC komunikační modemy (PRIME, G3)',
        ],
      },
      {
        title: 'Softwarová infrastruktura',
        items: [
          'Emulátor chytrých elektroměrů (vlastní vývoj)',
          'Virtualizovaná testovací prostředí',
          'Platformy pro testování AMM komunikace',
          'IDS monitoring a analýza síťového provozu',
          'Nástroje pro kryptografickou analýzu',
          'Simulační platformy pro chytré sítě',
        ],
      },
      {
        title: 'Komunikační rozhraní',
        items: [
          'Optická komunikační rozhraní (IEC 62056-21)',
          'PLC sběrnice a komunikační adaptéry',
          'NB-IoT / LTE-M testovací prostředí',
          'M-Bus rozhraní a konvertory',
          'RF analyzátory pro bezdrátový AMI (868 MHz)',
          'Průmyslové sběrnice (RS-485, CAN, Modbus)',
        ],
      },
    ],
  },
  projects: {
    sectionLabel: '04 — Projekty',
    title: 'Výzkumné projekty',
    subtitle: 'Výběr aktuálních a nedávno dokončených projektů laboratoře, financovaných TAČR, MPO a z průmyslové spolupráce.',
    items: [
      {
        id: 'kyberbezp-der',
        status: 'AKTIVNÍ',
        title: 'Kybernetická bezpečnost malých distribuovaných zdrojů energie',
        description:
          'Výzkum kybernetické bezpečnosti malých DER: fotovoltaika, bateriová úložiště, mikrosítě. Analýza komunikačních protokolů, identifikace zranitelností a návrh bezpečnostní architektury.',
        tags: ['DER', 'Kybernetická bezpečnost', '2026–2028'],
      },
      {
        id: 'dynamicke-modely',
        status: 'AKTIVNÍ',
        title: 'Dynamické systémové modely pro kybernetickou bezpečnost (TS01020105)',
        description:
          'Aplikace dynamických systémových modelů pro detekci a mitigaci kybernetických hrozeb v průmyslových a energetických systémech. Projekt TAČR v průmyslovém partnerství.',
        tags: ['TAČR', 'Dynamické modely', 'ICS', '2024–2027'],
      },
      {
        id: 'platforma-ami',
        status: 'AKTIVNÍ',
        title: 'Platforma pro testování komunikační infrastruktury AMI (TS02020197)',
        description:
          'Vývoj komplexní platformy pro měření, testování a optimalizaci komunikační infrastruktury pokročilých měřicích systémů. Projekt TAČR v partnerství s energetickým sektorem.',
        tags: ['TAČR', 'AMI', 'Komunikace', '2025–2027'],
      },
      {
        id: 'hospital-monitoring',
        status: 'AKTIVNÍ',
        title: 'Monitoring energetické infrastruktury nemocnic s využitím AI',
        description:
          'Vývoj systému pro monitoring a management energetické soustavy nemocnic s využitím umělé inteligence pro optimalizaci spotřeby a detekci poruch.',
        tags: ['AI', 'Monitoring', 'Nemocnice', '2025–2027'],
      },
      {
        id: 'krypto-portal',
        status: 'DOKONČEN',
        title: 'Krypto portál chytrého měření (FW06010490)',
        description:
          'Vývoj bezpečnostního řešení – krypto portálu – pro systémy chytrého měření. Projekt MPO v průmyslovém partnerství zaměřený na kryptografickou ochranu AMI komunikace.',
        tags: ['MPO', 'Kryptografie', 'AMI', '2023–2024'],
      },
      {
        id: 'amm-audit',
        status: 'DOKONČEN',
        title: 'Ověření kybernetické bezpečnosti AMM elektroměrů',
        description:
          'Komplexní bezpečnostní audit a evaluace chytrých elektroměrů nové generace: analýza komunikačních rozhraní, kryptografické implementace a potenciálních zranitelností.',
        tags: ['AMM', 'Bezpečnostní audit', 'Elektroměry', '2024'],
      },
    ],
  },
  education: {
    sectionLabel: '05 — Vzdělávání & spolupráce',
    title: 'Vzdělávání a spolupráce',
    subtitle:
      'Propojujeme akademický výzkum s praktickým vzděláváním, průmyslovou spoluprací a vývojem inovativních řešení.',
    pillars: [
      {
        title: 'Akademická spolupráce',
        description:
          'Úzká spolupráce s Ústavem telekomunikací VUT FEKT a dalšími akademickými pracovišti v oblasti komunikačních technologií a kybernetické bezpečnosti energetiky.',
        items: [
          'Výzkumné projekty v rámci VUT',
          'Meziuniverzitní a mezinárodní spolupráce',
          'Publikace a konferenční příspěvky',
          'Přístup ke sdílené akademické infrastruktuře',
        ],
      },
      {
        title: 'Zapojení studentů',
        description:
          'Aktivní zapojení studentů bakalářského a magisterského studia do reálných výzkumných projektů v oblasti komunikačních systémů pro energetiku a kybernetické bezpečnosti.',
        items: [
          'Vedení bakalářských prací',
          'Vedení diplomových prací',
          'Studentské stáže v laboratoři',
          'Praktické projekty v rámci výuky',
        ],
      },
      {
        title: 'Průmyslová spolupráce',
        description:
          'Dlouhodobá spolupráce s distribučními energetickými společnostmi, výrobci elektroměrů a AMI systémů na aplikovaném výzkumu a vývoji. Projekty TAČR, MPO a smluvní výzkum.',
        items: [
          'Projekty TAČR a MPO s průmyslovými partnery',
          'Smluvní výzkum a bezpečnostní evaluace',
          'Konzultace a technické poradenství',
          'Vývoj testovacích platforem pro průmysl',
        ],
      },
    ],
  },
  contact: {
    sectionLabel: '06 — Kontakt',
    title: 'Kontaktujte laboratoř',
    subtitle:
      'Zajímá vás spolupráce na projektu, bezpečnostní evaluace zařízení nebo studijní témata? Rádi se s vámi spojíme.',
    invitation:
      'Vítáme průmyslové partnery z energetického sektoru, výrobce AMI systémů, výzkumné instituce i studenty se zájmem o komunikační technologie a kybernetickou bezpečnost energetiky.',
    person: {
      name: 'doc. Ing. Petr Mlýnek, Ph.D.',
      role: 'Vedoucí laboratoře',
    },
    details: [
      { label: 'E-mail', value: 'mlynek@vut.cz' },
      { label: 'Telefon', value: '+420 541 146 960' },
      { label: 'Pracoviště', value: 'T12/SD 5.86, Technická 12, Brno' },
      { label: 'Instituce', value: 'Vysoké učení technické v Brně' },
      { label: 'Fakulta', value: 'Fakulta elektrotechniky a komunikačních technologií' },
      { label: 'Ústav', value: 'Ústav telekomunikací' },
    ],
    cta: 'Napsat e-mail',
  },
  footer: {
    copy: '© 2025 SmartGridLab — VUT FEKT, Ústav telekomunikací',
    tagline: 'Výzkum komunikace a kybernetické bezpečnosti energetické infrastruktury',
  },
}

export type Translations = typeof cs
export default cs
