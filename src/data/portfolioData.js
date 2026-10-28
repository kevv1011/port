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
    id: 'runway', number: '01', category: 'Web · Android · Personal finance',
    title: 'Runway', subtitle: 'A little more clarity for your money.',
    problem: 'Everyday spending is hard to track when available money and savings blur together.',
    result: 'A local wallet with expense history, weekly spending charts, privacy masking, and an Android home-screen widget for quick expense entry.',
    metric: 'Web + Android', metricLabel: 'with a native home-screen widget', accent: 'cyan',
    tags: ['React 18', 'Vite', 'Capacitor', 'Android', 'Local storage'],
    repo: 'https://github.com/kevv1011/Runway',
    note: 'Work in progress · Data stays on each device. Browser and Android wallets are separate.',
  },
  {
    id: 'echelon', number: '02', category: 'Full-stack · Maps · Cycling',
    title: 'Echelon Cycling', subtitle: 'Check the wind. Pick your line.',
    problem: 'Planning a ride means bringing weather, routes, pacing, and fueling into one useful view.',
    result: 'Hourly forecasts, ride estimates, opt-in GPS recording, and saved cue sheets. The account-backed app adds mapped route comparison and PostgreSQL persistence.',
    metric: 'Plan → Ride', metricLabel: 'from weather briefing to GPX export', accent: 'amber',
    tags: ['React 18', 'FastAPI', 'PostgreSQL', 'OpenStreetMap', 'Vercel', 'Render'],
    repo: 'https://github.com/kevv1011/Echelon-Cycling',
    demo: 'https://kevv1011.github.io/Echelon-Cycling/', live: 'https://echelon-cycling.vercel.app/',
    note: 'Demo: no account needed. Live app: Google sign-in is currently limited to test users.',
  },
  {
    id: 'tindahan', number: '03', category: 'Full-stack · Inventory · Point of sale',
    title: 'TindahanTrack', subtitle: 'From stock check to checkout.',
    problem: 'Neighborhood stores need a simple way to manage inventory, take payments, and understand daily sales.',
    result: 'Low-stock alerts, Quick Cart checkout with change calculation, printable receipts, and seven-day sales analytics. Demo mode saves inventory and sales in the browser.',
    metric: 'Stock → Sale', metricLabel: 'one connected store workflow', accent: 'cyan',
    tags: ['React 18', 'Express.js', 'PostgreSQL', 'Capacitor', 'Render', 'GitHub Actions'],
    repo: 'https://github.com/kevv1011/TinadahanTrack', demo: 'https://kevv1011.github.io/TinadahanTrack/',
  },
  {
    id: 'hau', number: '04', category: 'Cloud · Mobile · Distributed systems',
    title: 'HAUPokemon', subtitle: 'A connected world, across two AWS regions.',
    problem: 'Real-time mobile GPS data needs a secure route to a game database across cloud regions.',
    result: 'Cross-region VPC Peering and Tailscale connect Paris and N. Virginia, supporting a Top 10 leaderboard and 5-second capture triggers.',
    metric: '2 regions', metricLabel: 'securely connected on AWS', accent: 'violet',
    tags: ['React', 'Capacitor', 'AWS EC2', 'RDS / MySQL', 'VPC Peering', 'PHP'],
    repo: 'https://github.com/kevv1011/HAUPokemon-Monster-App',
    note: 'Team project · Lead full-stack developer. Live backend access requires the project’s private network.',
  },
  {
    id: 'ec2', number: '05', category: 'Cloud · Serverless',
    title: 'EC2 Control Center', subtitle: 'Less console navigation. More control.',
    problem: 'Routine instance checks and start/stop operations shouldn’t require navigating the full AWS Console.',
    result: 'Lambda and API Gateway enable one-click instance state changes and real-time monitoring without an application server to maintain.',
    metric: '0 servers', metricLabel: 'to maintain for the dashboard', accent: 'amber',
    tags: ['AWS Lambda', 'API Gateway', 'AWS EC2', 'HTML / JavaScript'],
    repo: null,
  },
  {
    id: 'database', number: '06', category: 'Backend · Data engineering',
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
  runway: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Capacitor', 'Android', 'Git'],
  echelon: ['React', 'JavaScript', 'Python', 'HTML5', 'CSS3', 'Vite', 'FastAPI', 'PostgreSQL', 'SQL', 'SQLAlchemy', 'Render', 'Vercel', 'Git', 'GitHub Actions'],
  tindahan: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Express.js', 'PostgreSQL', 'Neon', 'SQL', 'Capacitor', 'Android', 'Render', 'Git', 'GitHub Actions'],
  hau: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'Capacitor', 'AWS', 'AWS EC2', 'RDS', 'MySQL', 'VPC Peering'],
  ec2: ['AWS', 'Lambda', 'API Gateway', 'AWS EC2', 'HTML5', 'JavaScript'],
  database: ['PostgreSQL', 'SQL', 'Shell / Bash', 'Git'],
};

export function projectUsesSkill(project, skill) {
  return Boolean(skill && projectSkills[project.id]?.includes(skill));
}

export const caseStudy = [
  { id: 'problem', label: 'The problem', title: 'A store needs more than a stock list.', body: 'Local merchants need quick stock adjustments, low-stock alerts, and a checkout that calculates change. Sales history and daily trends should be just as easy to reach from a phone.', points: ['Mobile-first inventory controls', 'Quick Cart checkout and receipts', 'Seven-day sales analytics'] },
  { id: 'approach', label: 'The approach', title: 'One interface. Two persistence modes.', body: 'A React frontend connects to an authenticated Express API and PostgreSQL for live store data. A separate demo mode uses browser localStorage for inventory and sales, making the workflow easy to explore without signing in.', points: ['Owner authentication for live data', 'Atomic stock deductions at checkout', 'Separate browser-based demo data'] },
  { id: 'results', label: 'The results', title: 'Stock, checkout, and sales in one place.', body: 'The public GitHub Pages demo brings together product management, category filters, a Quick Cart, printable receipts, and sales analytics. A Capacitor wrapper also brings the frontend to Android.', points: ['25 seeded store products', 'Cash tendering and change calculation', 'Web and Android interfaces'] },
];

export const skillGroups = [
  { name: 'Languages', items: [
    ['Python', 'https://www.python.org/'], ['Dart', 'https://dart.dev/'], ['Java', 'https://dev.java/'], ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'], ['TypeScript', 'https://www.typescriptlang.org/'], ['PHP', 'https://www.php.net/'], ['HTML5', 'https://html.spec.whatwg.org/'], ['CSS3', 'https://www.w3.org/Style/CSS/'], ['SQL', 'https://www.postgresql.org/docs/current/sql.html'], ['Shell / Bash', 'https://www.gnu.org/software/bash/'],
  ] },
  { name: 'Frameworks', items: [
    ['Vite', 'https://vite.dev/'], ['Android', 'https://developer.android.com/'],
    ['React', 'https://react.dev/'], ['Flutter', 'https://flutter.dev/'], ['FastAPI', 'https://fastapi.tiangolo.com/'], ['Express.js', 'https://expressjs.com/'], ['Capacitor', 'https://capacitorjs.com/'], ['SQLAlchemy', 'https://www.sqlalchemy.org/'], ['SymPy', 'https://www.sympy.org/'],
  ] },
  { name: 'Data & cloud', items: [
    ['PostgreSQL', 'https://www.postgresql.org/'], ['Neon', 'https://neon.com/'], ['Supabase', 'https://supabase.com/'], ['MySQL', 'https://www.mysql.com/'], ['AWS', 'https://aws.amazon.com/'], ['AWS EC2', 'https://aws.amazon.com/ec2/'], ['Lambda', 'https://aws.amazon.com/lambda/'], ['API Gateway', 'https://aws.amazon.com/api-gateway/'], ['RDS', 'https://aws.amazon.com/rds/'], ['VPC Peering', 'https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html'],
  ] },
  { name: 'Tools & testing', items: [
    ['Vercel', 'https://vercel.com/'],
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
