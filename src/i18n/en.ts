import type { Translations } from './cs'

const en: Translations = {
  lang: 'en',
  meta: {
    title: 'SmartGridLab – Communication and Cybersecurity Research for Smart Grids',
    description:
      'Research laboratory at BUT FEEC focused on communication systems for AMI, smart meter security testing, industrial protocol analysis and energy infrastructure monitoring.',
  },
  nav: {
    research: 'Research',
    about: 'About',
    infrastructure: 'Infrastructure',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    label: 'BUT FEEC — Department of Telecommunications',
    headline: 'Communication and Cybersecurity Research for Smart Grids',
    subheadline:
      'We design, test and secure communication systems for energy infrastructure, smart electricity meters and industrial networks.',
    ctaResearch: 'Our Research',
    ctaContact: 'Contact Laboratory',
    statusItems: [
      { label: 'Systems Status', value: 'OPERATIONAL' },
      { label: 'Active Protocols', value: 'IEC 61850 / DLMS' },
      { label: 'Test Environment', value: 'ONLINE' },
    ],
  },
  about: {
    sectionLabel: '01 — About the Lab',
    title: 'Communication and Security Research for Energy Infrastructure',
    description:
      'SmartGridLab is a research and testing laboratory at the Faculty of Electrical Engineering and Communication, Brno University of Technology, part of the Department of Telecommunications. We focus on communication systems for advanced metering infrastructure (AMI), cybersecurity of smart grids and energy infrastructure monitoring.',
    description2:
      'We combine fundamental academic research with applied industrial projects. Our activities include development and testing of communication platforms, security evaluation of smart meters, analysis of industrial protocols, research of anomaly detection methods and simulation of energy grid behaviour. Research results are directly applied by energy distribution companies and AMI system manufacturers.',
    tags: [
      'AMI Communication Systems',
      'Smart Meter Security Testing',
      'Smart Grid',
      'DLMS/COSEM',
      'IEC 61850',
      'PLC Communication',
      'RF Mesh / NB-IoT / LTE-M',
      'Cybersecurity',
      'Industrial Protocols',
      'Energy Infrastructure Monitoring',
      'Dynamic System Models',
      'Community Energy',
    ],
    stats: [
      { value: 'AMI', label: 'Advanced Metering Infrastructure' },
      { value: 'IEC', label: '61850 / DLMS / PLC' },
      { value: 'TAČR', label: 'Applied Research with Industry' },
      { value: 'BUT', label: 'Department of Telecommunications FEEC' },
    ],
  },
  research: {
    sectionLabel: '02 — Research Areas',
    title: 'Research Areas',
    subtitle:
      'Our research covers the complete communication and security ecosystem of smart energy — from the physical data transmission layer to security architectures.',
    areas: [
      {
        id: 'meter-security',
        title: 'Smart Meter Security Testing',
        description:
          'Comprehensive security evaluation of smart electricity meters and AMM devices: communication interface testing, cryptographic implementation assessment, vulnerability analysis and meter emulation for testing purposes.',
        tags: ['AMM', 'DLMS/COSEM', 'Cryptography', 'Emulation'],
      },
      {
        id: 'ami-comm',
        title: 'AMI Communication Systems',
        description:
          'Design, testing and optimization of communication infrastructure for advanced metering systems: PLC (PRIME, G3), RF Mesh, NB-IoT, LTE-M, M-Bus and optical interfaces. Development of testing platforms for AMM communication.',
        tags: ['PLC', 'NB-IoT', 'LTE-M', 'RF Mesh', 'M-Bus'],
      },
      {
        id: 'grid-security',
        title: 'Smart Grid Cybersecurity',
        description:
          'Security analysis of smart distribution grid communication architecture, research of intrusion detection and anomaly detection methods, security assessment of control systems per IEC 61850 and IEC 62351.',
        tags: ['IEC 61850', 'IEC 62351', 'DNP3', 'Anomaly Detection'],
      },
      {
        id: 'dynamic-models',
        title: 'Dynamic Models for Cybersecurity',
        description:
          'Application of dynamic system models and machine learning methods for cybersecurity of industrial and energy systems. Behavioural modelling and deviation detection.',
        tags: ['Behavioural Models', 'ML/AI', 'ICS Security', 'Detection'],
      },
      {
        id: 'energy-monitoring',
        title: 'Energy Infrastructure Monitoring',
        description:
          'Systems for monitoring and management of energy grids in buildings, hospitals and industrial complexes. Use of AI for optimization and fault detection.',
        tags: ['Monitoring', 'AI/ML', 'BEMS', 'Hospitals'],
      },
      {
        id: 'protocol-analysis',
        title: 'Industrial Protocol Analysis',
        description:
          'In-depth analysis and testing of industrial communication protocols: DLMS/COSEM, IEC 61850, Modbus, DNP3 and proprietary protocols used in the energy sector.',
        tags: ['Modbus', 'DLMS', 'IEC 61850', 'Wireshark'],
      },
      {
        id: 'distributed-energy',
        title: 'Distributed Energy Resource Security',
        description:
          'Research into cybersecurity of small distributed energy resources (DER), community energy systems and V2G communication for AC electric vehicle charging stations.',
        tags: ['DER', 'V2G', 'Smart Charging', 'OCPP'],
      },
      {
        id: 'comm-testing',
        title: 'Communication Technology Testing',
        description:
          'Development of specialized testing platforms for LTE-M, NB-IoT and other LPWAN technologies. Study and selection of communication solutions for specific energy sector use cases.',
        tags: ['LTE-M', 'NB-IoT', 'LPWAN', 'Test Platform'],
      },
      {
        id: 'resilience',
        title: 'Energy Infrastructure Resilience',
        description:
          'Assessment of critical energy infrastructure resilience, analysis of cyber-physical attack impacts on grid operation and research of rapid recovery mechanisms.',
        tags: ['CPS', 'NIS2', 'Resilience', 'Critical Infrastructure'],
      },
    ],
  },
  infrastructure: {
    sectionLabel: '03 — Infrastructure',
    title: 'Laboratory Infrastructure',
    subtitle:
      'The laboratory features a comprehensive testing environment for research on communication systems and energy infrastructure security.',
    categories: [
      {
        title: 'Test Equipment',
        items: [
          'Smart electricity meters — multiple vendors and generations (AMM/AMI)',
          'Industrial switches and communication components',
          'SDR devices (USRP, HackRF, RTL-SDR)',
          'Protocol analyzers and network probes',
          'Oscilloscopes and logic analyzers',
          'PLC communication modems (PRIME, G3)',
        ],
      },
      {
        title: 'Software Infrastructure',
        items: [
          'Smart meter emulator (in-house development)',
          'Virtualized test environments',
          'AMM communication testing platforms',
          'IDS monitoring and network traffic analysis',
          'Cryptographic analysis tools',
          'Smart grid simulation platforms',
        ],
      },
      {
        title: 'Communication Interfaces',
        items: [
          'Optical communication interfaces (IEC 62056-21)',
          'PLC buses and communication adapters',
          'NB-IoT / LTE-M test environment',
          'M-Bus interfaces and converters',
          'RF analyzers for wireless AMI (868 MHz)',
          'Industrial buses (RS-485, CAN, Modbus)',
        ],
      },
    ],
  },
  projects: {
    sectionLabel: '04 — Projects',
    title: 'Research Projects',
    subtitle: 'A selection of current and recently completed laboratory projects, funded by TAČR, MPO and through industrial collaboration.',
    items: [
      {
        id: 'kyberbezp-der',
        status: 'ACTIVE',
        title: 'Cybersecurity of Small Distributed Energy Resources',
        description:
          'Research into cybersecurity of small DERs: photovoltaics, battery storage, microgrids. Communication protocol analysis, vulnerability identification and security architecture design.',
        tags: ['DER', 'Cybersecurity', '2026–2028'],
      },
      {
        id: 'dynamicke-modely',
        status: 'ACTIVE',
        title: 'Dynamic System Models for Cybersecurity (TS01020105)',
        description:
          'Application of dynamic system models for detection and mitigation of cyber threats in industrial and energy systems. TAČR project in industrial partnership.',
        tags: ['TAČR', 'Dynamic Models', 'ICS', '2024–2027'],
      },
      {
        id: 'platforma-ami',
        status: 'ACTIVE',
        title: 'AMI Communication Infrastructure Testing Platform (TS02020197)',
        description:
          'Development of a comprehensive platform for measurement, testing and optimization of communication infrastructure for advanced metering systems. TAČR project in partnership with the energy sector.',
        tags: ['TAČR', 'AMI', 'Communication', '2025–2027'],
      },
      {
        id: 'hospital-monitoring',
        status: 'ACTIVE',
        title: 'Energy Infrastructure Monitoring in Hospitals Using AI',
        description:
          'Development of a system for monitoring and management of hospital energy grids using artificial intelligence for consumption optimization and fault detection.',
        tags: ['AI', 'Monitoring', 'Hospitals', '2025–2027'],
      },
      {
        id: 'krypto-portal',
        status: 'COMPLETED',
        title: 'Smart Metering Crypto Portal (FW06010490)',
        description:
          'Development of a security solution — crypto portal — for smart metering systems. MPO project in industrial partnership focused on cryptographic protection of AMI communication.',
        tags: ['MPO', 'Cryptography', 'AMI', '2023–2024'],
      },
      {
        id: 'amm-audit',
        status: 'COMPLETED',
        title: 'Cybersecurity Verification of AMM Smart Meters',
        description:
          'Comprehensive security audit and evaluation of next-generation smart meters: analysis of communication interfaces, cryptographic implementation and potential vulnerabilities.',
        tags: ['AMM', 'Security Audit', 'Smart Meters', '2024'],
      },
    ],
  },
  education: {
    sectionLabel: '05 — Education & Collaboration',
    title: 'Education and Collaboration',
    subtitle:
      'Bridging academic research with practical education, industrial collaboration and development of innovative solutions.',
    pillars: [
      {
        title: 'Academic Cooperation',
        description:
          'Close collaboration with the Department of Telecommunications at BUT FEEC and other academic institutions in the fields of communication technologies and energy cybersecurity.',
        items: [
          'Research projects within BUT',
          'Inter-university and international collaboration',
          'Publications and conference contributions',
          'Access to shared academic infrastructure',
        ],
      },
      {
        title: 'Student Involvement',
        description:
          'Active involvement of bachelor and master students in real research projects in communication systems for energy and cybersecurity.',
        items: [
          'Bachelor thesis supervision',
          'Master thesis supervision',
          'Student internships in the laboratory',
          'Practical projects within coursework',
        ],
      },
      {
        title: 'Industry Collaboration',
        description:
          'Long-term collaboration with energy distribution companies, smart meter and AMI system manufacturers on applied research and development. TAČR, MPO and contract research projects.',
        items: [
          'TAČR and MPO projects with industrial partners',
          'Contract research and security evaluation',
          'Consulting and technical advisory',
          'Development of testing platforms for industry',
        ],
      },
    ],
  },
  contact: {
    sectionLabel: '06 — Contact',
    title: 'Contact the Laboratory',
    subtitle:
      'Interested in project collaboration, device security evaluation or thesis topics? We would like to hear from you.',
    invitation:
      'We welcome industrial partners from the energy sector, AMI system manufacturers, research institutions and students interested in communication technologies and energy cybersecurity.',
    person: {
      name: 'doc. Ing. Petr Mlýnek, Ph.D.',
      role: 'Laboratory Head',
    },
    details: [
      { label: 'Email', value: 'mlynek@vut.cz' },
      { label: 'Phone', value: '+420 541 146 960' },
      { label: 'Office', value: 'T12/SD 5.86, Technická 12, Brno' },
      { label: 'Institution', value: 'Brno University of Technology' },
      { label: 'Faculty', value: 'Faculty of Electrical Engineering and Communication' },
      { label: 'Department', value: 'Department of Telecommunications' },
    ],
    cta: 'Send Email',
  },
  footer: {
    copy: '© 2025 SmartGridLab — BUT FEEC, Department of Telecommunications',
    tagline: 'Communication and Cybersecurity Research for Energy Infrastructure',
  },
}

export default en
