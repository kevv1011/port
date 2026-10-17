import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import About from './components/About';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Icon from './components/Icon';
import useEmailCopy from './hooks/useEmailCopy';

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { copied, message, copyEmail } = useEmailCopy();
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0c0e' : '#f8fafc');
    try { localStorage.setItem('jr-theme', theme); } catch { /* Theme still works without persistent storage. */ }
  }, [theme]);

  return <><a href="#main-content" className="skip-link">Skip to content</a><Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main id="main-content"><Hero copied={copied} copyEmail={copyEmail} /><Projects selectedSkill={selectedSkill} clearSkill={() => setSelectedSkill(null)} /><CaseStudy /><About /><Skills selectedSkill={selectedSkill} selectSkill={skill => setSelectedSkill(current => current === skill ? null : skill)} /><Credentials /><Contact copied={copied} copyEmail={copyEmail} /></main><footer className="site-footer container"><a className="wordmark" href="#home"><Icon name="code" size={19} />justine<span className="logo-dot">.</span></a><p>© {new Date().getFullYear()} Justine Kevin M. Reyes<span>Built with care, React &amp; a little curiosity.</span></p><a href="#home" className="back-top">Back to top <Icon name="external" size={15} /></a></footer><div className={`toast ${message ? 'toast-visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">{message && <><Icon name={copied ? 'check' : 'mail'} size={18} /><span>{message}</span></>}</div></>;
}
