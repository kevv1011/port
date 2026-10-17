import { identity } from '../data/portfolioData';
import Icon from './Icon';

export default function Contact({ copied, copyEmail }) {
  return <section id="contact" className="section contact-section" aria-labelledby="contact-title">
    <div className="container"><div className="contact-panel"><div className="contact-content">
      <p className="eyebrow"><i className="status-dot" /> Open to opportunities</p>
      <h2 id="contact-title">Let’s build something<br /><span>that holds up.</span></h2>
      <p>Looking for a developer who cares about what happens<br className="desktop-break" /> behind the interface? I’d love to hear from you.</p>
      <div className="email-actions"><a className="button button-primary" href={`mailto:${identity.email}`}><Icon name="mail" size={18} />{identity.email}<Icon name="external" size={16} /></a><button className="button button-secondary contact-copy-email" type="button" onClick={copyEmail}><Icon name={copied ? 'check' : 'copy'} size={16} />{copied ? 'Copied to clipboard' : 'Copy email'}</button></div>
      <div className="contact-socials"><a href={identity.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} />LinkedIn <Icon name="external" size={13} /></a><a href={identity.github} target="_blank" rel="noreferrer"><Icon name="github" size={16} />GitHub <Icon name="external" size={13} /></a><a href="tel:+639291168300"><Icon name="phone" size={16} />{identity.phone}</a></div>
    </div></div></div>
  </section>;
}
