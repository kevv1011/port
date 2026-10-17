export const identity = {
  name: 'Justine Kevin M. Reyes',
  role: 'Backend & Full-Stack Developer',
  email: 'justine.kevin13@gmail.com',
  phone: '+63 929 116 8300',
  github: 'https://github.com/kevv1011',
  linkedin: 'https://www.linkedin.com/in/justinekevin/',
  location: 'Angeles City, Philippines',
};

export const projects = [
  {
    id: 'tindahan', number: '01', category: 'Full-stack · Offline-first',
    title: 'TindahanTrack', subtitle: 'Inventory that stays open when the internet doesn’t.',
    problem: 'Sari-sari stores need to track stock and sales even when local internet connections drop.',
    result: 'Optimistic stock updates, 20 pre-seeded products, and an automatic localStorage fallback keep daily workflows moving.',
    metric: '100%', metricLabel: 'offline operational continuity', accent: 'cyan',
    tags: ['React 18', 'Vite', 'Express.js', 'Neon PostgreSQL', 'GitHub Actions'],
    repo: 'https://github.com/kevv1011/TinadahanTrack', live: null,
  },
  {
    id: 'hau', number: '02', category: 'Cloud · Mobile · Distributed systems',
    title: 'HAUPokemon', subtitle: 'A connected world, across two AWS regions.',
    problem: 'Real-time mobile GPS data needs a secure route to a game database across cloud regions.',
    result: 'Cross-region VPC Peering and Tailscale connect Paris and N. Virginia, supporting a Top 10 leaderboard and 5-second capture triggers.',
    metric: '2 regions', metricLabel: 'securely connected on AWS', accent: 'violet',
    tags: ['React', 'Capacitor', 'AWS EC2', 'RDS / MySQL', 'VPC Peering', 'PHP'],
    repo: 'https://github.com/kevv1011/HAUPokemon-Monster-App',
  },
  {
    id: 'ec2', number: '03', category: 'Cloud · Serverless',
    title: 'EC2 Control Center', subtitle: 'Less console navigation. More control.',
    problem: 'Routine instance checks and start/stop operations shouldn’t require navigating the full AWS Console.',
    result: 'Lambda and API Gateway enable one-click instance state changes and real-time monitoring without an application server to maintain.',
    metric: '0 servers', metricLabel: 'to maintain for the dashboard', accent: 'amber',
    tags: ['AWS Lambda', 'API Gateway', 'AWS EC2', 'HTML / JavaScript'],
    repo: null,
  },
  {
    id: 'database', number: '04', category: 'Backend · Data engineering',
    title: 'Data & the command line', subtitle: 'Small tools. Thoughtful foundations.',
    problem: 'Manual data entry and poorly structured queries make scheduling and CLI lookups harder than they need to be.',
    result: 'Normalized PostgreSQL schemas and shell workflows across a Salon Scheduler, Periodic Table, World Cup database, and Number Guessing Game.',
    metric: '5+ tools', metricLabel: 'built with SQL & shell scripting', accent: 'cyan',
    tags: ['PostgreSQL', 'SQL', 'Bash', 'Git'],
    repo: identity.github, profileLink: true,
  },
];

// Explicit links keep broad skills from implying use in projects where they aren't documented.
export const projectSkills = {
  tindahan: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Express.js', 'PostgreSQL', 'Neon', 'SQL', 'Git', 'GitHub Actions'],
  hau: ['React', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Capacitor', 'AWS', 'AWS EC2', 'RDS', 'MySQL', 'VPC Peering'],
  ec2: ['AWS', 'Lambda', 'API Gateway', 'AWS EC2', 'HTML5', 'JavaScript'],
  database: ['PostgreSQL', 'SQL', 'Shell / Bash', 'Git'],
};

export function projectUsesSkill(project, skill) {
  return Boolean(skill && projectSkills[project.id]?.includes(skill));
}

export const caseStudy = [
  { id: 'problem', label: 'The problem', title: 'A store can’t pause for a dropped connection.', body: 'Local merchants need quick stock adjustments, low-stock alerts, and category filters on a phone. Those essentials should work whether the store is connected to the cloud or completely offline.', points: ['Mobile-first stock controls', 'Low-stock thresholds at a glance', 'Inventory access without a network'] },
  { id: 'approach', label: 'The approach', title: 'One interface. Two dependable data paths.', body: 'An Atomic Design React component tree talks to a RESTful Express API and Neon PostgreSQL. VITE_USE_MOCK_API switches the data source: cloud-backed persistence in live mode, localStorage in demo mode, with optimistic UI updates in both.', points: ['Atoms → molecules → organisms → pages', 'GET, POST, PUT, PATCH & DELETE endpoints', 'Cloud PostgreSQL or localStorage persistence'] },
  { id: 'results', label: 'The results', title: 'The essential workflow keeps moving.', body: 'An interactive demo deployed through GitHub Actions to GitHub Pages brings together CRUD modals, shimmer loaders, animated stat counters, and sticky search and category filters. Demo data persists locally between visits.', points: ['20 pre-seeded store products', 'Automated build and deployment', 'Full create, read, update & delete flows'] },
];

export const skillGroups = [
  { name: 'Languages', items: [
    ['Python', 'https://www.python.org/'], ['Dart', 'https://dart.dev/'], ['Java', 'https://dev.java/'], ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'], ['TypeScript', 'https://www.typescriptlang.org/'], ['PHP', 'https://www.php.net/'], ['HTML5', 'https://html.spec.whatwg.org/'], ['CSS3', 'https://www.w3.org/Style/CSS/'], ['SQL', 'https://www.postgresql.org/docs/current/sql.html'], ['Shell / Bash', 'https://www.gnu.org/software/bash/'],
  ] },
  { name: 'Frameworks', items: [
    ['React', 'https://react.dev/'], ['Flutter', 'https://flutter.dev/'], ['FastAPI', 'https://fastapi.tiangolo.com/'], ['Express.js', 'https://expressjs.com/'], ['Capacitor', 'https://capacitorjs.com/'], ['SQLAlchemy', 'https://www.sqlalchemy.org/'], ['SymPy', 'https://www.sympy.org/'],
  ] },
  { name: 'Data & cloud', items: [
    ['PostgreSQL', 'https://www.postgresql.org/'], ['Neon', 'https://neon.com/'], ['Supabase', 'https://supabase.com/'], ['MySQL', 'https://www.mysql.com/'], ['AWS', 'https://aws.amazon.com/'], ['AWS EC2', 'https://aws.amazon.com/ec2/'], ['Lambda', 'https://aws.amazon.com/lambda/'], ['API Gateway', 'https://aws.amazon.com/api-gateway/'], ['RDS', 'https://aws.amazon.com/rds/'], ['VPC Peering', 'https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html'],
  ] },
  { name: 'Tools & testing', items: [
    ['Git', 'https://git-scm.com/'], ['GitHub Actions', 'https://github.com/features/actions'], ['Docker', 'https://www.docker.com/'], ['Render', 'https://render.com/'], ['VS Code', 'https://code.visualstudio.com/'], ['pytest', 'https://docs.pytest.org/'], ['Ruff', 'https://docs.astral.sh/ruff/'],
  ] },
];

// Credential titles and dates supplied by the owner. Add individual credential URLs when available.
export const certifications = [
  { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'Apr 2026', color: 'cyan' },
  { title: 'AWS Academy Graduate: Cloud Foundations', issuer: 'AWS', date: 'Mar 2026', color: 'amber' },
  { title: 'Data Analytics Essentials', issuer: 'Cisco', date: 'Mar 2026', color: 'cyan' },
  { title: 'AI Fundamentals with IBM SkillsBuild', issuer: 'Cisco / IBM', date: 'Mar 2026', color: 'violet' },
  { title: 'Cyber Threat Management', issuer: 'Cisco', date: 'Nov 2025', color: 'cyan' },
  { title: 'Endpoint Security', issuer: 'Cisco', date: 'Aug 2025', color: 'cyan' },
  { title: 'JavaScript Essentials 1', issuer: 'Cisco', date: 'Oct 2024', color: 'amber' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', date: 'Mar 2024', color: 'cyan' },
  { title: 'CompTIA IT Fundamentals+ (ITF+)', issuer: 'CompTIA', date: 'Nov 2023', color: 'violet' },
];
