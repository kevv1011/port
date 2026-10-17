import { useState } from 'react';
import Icon from './Icon';

export default function Header({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-shell">
      <a className="wordmark" href="#home" aria-label="Justine Reyes, home"><span className="logo-mark"><Icon name="code" size={22} /></span>justine<span className="logo-dot">.</span></a>
      <nav id="main-navigation" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {[['projects', 'Projects'], ['about', 'About'], ['skills', 'Stack'], ['credentials', 'Credentials']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Icon name="external" size={15} /></a>
      </nav>
      <div className="nav-actions"><a href="#contact" className="nav-contact">Let’s talk <Icon name="external" size={15} /></a><span className="nav-divider" /><button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}><Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} /></button><button className="icon-button menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button></div>
    </div>
  </header>;
}
