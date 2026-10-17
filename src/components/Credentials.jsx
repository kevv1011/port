import { certifications } from '../data/portfolioData';
import Icon from './Icon';

export default function Credentials() {
  return <section id="credentials" className="section credentials-section" aria-labelledby="credentials-title"><div className="container"><div className="section-heading"><div><p className="eyebrow"><span>05</span> Foundations &amp; focus</p><h2 id="credentials-title">Always building.<span> Always learning.</span></h2></div></div><div className="strength-grid">{[
    ['shield', 'Offline-first UX & state', 'Keep essential workflows useful when connectivity isn’t.'],
    ['globe', 'Cloud & multi-region networks', 'Connect services with a clear, secure architecture.'],
    ['database', 'Relational data modeling', 'Give applications a well-structured foundation.'],
  ].map(([icon, title, body]) => <div className="strength" key={title}><Icon name={icon} size={25} /><h3>{title}</h3><p>{body}</p></div>)}</div><div className="credentials-header"><h3>Learning, backed by credentials.</h3><span className="mono-label">09 certifications &amp; course completions</span></div><div className="certification-grid">{certifications.map(cert => <article className={`certification accent-${cert.color}`} key={cert.title}><span className="cert-icon"><Icon name="shield" size={20} /></span><div><span className="cert-issuer">{cert.issuer}</span><h4>{cert.title}</h4><time>{cert.date}</time></div></article>)}</div></div></section>;
}
