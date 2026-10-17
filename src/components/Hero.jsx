import Icon from './Icon';
import { identity } from '../data/portfolioData';

function BuilderWindow() {
  return <div className="builder-window" aria-label="Illustration of a resilient application architecture">
    <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>the way I build</span><Icon name="code" size={15} /></div>
    <div className="builder-code"><span className="code-comment">// thoughtful systems, practical outcomes</span><p><span className="code-violet">const</span> developer <span className="code-muted">=</span> {'{'}</p><p className="indent">name: <span className="code-amber">'Justine Reyes'</span>,</p><p className="indent">focus: <span className="code-cyan">'build for the real world'</span>,</p><p className="indent">approach: [<span className="code-amber">'design'</span>, <span className="code-amber">'ship'</span>, <span className="code-amber">'refine'</span>]</p><p>{'};'}</p></div>
    <div className="hero-topology"><div className="topology-node"><Icon name="layers" /><span>Interface</span><small>React / Mobile</small></div><span className="connector" /><div className="topology-node core"><Icon name="code" /><span>Services</span><small>API / Compute</small></div><span className="connector" /><div className="topology-node"><Icon name="database" /><span>Persistence</span><small>SQL / Local</small></div></div>
    <div className="window-status"><span><i className="status-dot" />Designed for resilience</span><span>always learning<span className="terminal-cursor">_</span></span></div>
    <div className="floating-note"><span className="note-icon"><Icon name="check" size={16} /></span><span>Good software works.<small>Great software keeps working.</small></span></div>
  </div>;
}

export default function Hero({ copied, copyEmail }) {
  return <section id="home" className="hero section-anchor">
    <div className="container hero-grid">
      <div className="hero-copy"><div className="availability-pill"><i className="status-dot" />Open to remote &amp; on-site opportunities</div><p className="intro-line">Hi, I’m <strong>Justine Kevin M. Reyes.</strong></p><h1>Built to work.<br /><span>Made to last.</span></h1><p className="hero-role">Backend &amp; Full-Stack Developer</p><p className="hero-description">I build resilient backend services, multi-region cloud architectures, and offline-ready web applications designed for real-world reliability.</p><p className="location"><Icon name="pin" size={15} />Angeles City, Pampanga, Philippines <span>· GMT+8</span></p><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <Icon name="arrow" size={18} /></a><button className="button button-secondary hero-copy-email" type="button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={15} />{copied ? 'Copied to clipboard' : 'Copy email'}</button><a className="icon-button social-pill" href={identity.github} target="_blank" rel="noreferrer" aria-label="GitHub profile (opens in new tab)"><Icon name="github" /></a><a className="icon-button social-pill" href={identity.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in new tab)"><Icon name="linkedin" /></a></div></div>
      <BuilderWindow />
    </div>
    <div className="container hero-foot"><span className="mono-label">From the interface to the infrastructure.</span><div><span><Icon name="layers" size={15} />Offline-ready apps</span><span><Icon name="globe" size={15} />Multi-region systems</span><span><Icon name="database" size={15} />Thoughtful data models</span></div></div>
  </section>;
}
