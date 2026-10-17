import { useState } from 'react';
import { caseStudy } from '../data/portfolioData';
import Icon from './Icon';
import StockSimulator from './StockSimulator';

export default function CaseStudy() {
  const [active, setActive] = useState(0);
  const [offline, setOffline] = useState(true);
  function handleTabKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % caseStudy.length;
    if (event.key === 'ArrowLeft') next = (index + caseStudy.length - 1) % caseStudy.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = caseStudy.length - 1;
    if (next !== undefined) { event.preventDefault(); setActive(next); document.getElementById(`case-tab-${next}`)?.focus(); }
  }
  return <section id="case-study" className="section case-section" aria-labelledby="case-title">
    <div className="container case-shell">
      <div className="case-copy">
        <p className="eyebrow"><span>02</span> Under the hood</p>
        <h2 id="case-title">Built for the moments<br />the internet <em>isn’t.</em></h2>
        <p className="case-intro">A closer look at TindahanTrack.</p>
        <div className="case-tabs" role="tablist" aria-label="TindahanTrack case study">{caseStudy.map((tab, index) => <button type="button" key={tab.id} id={`case-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`case-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => handleTabKey(event, index)}><span>0{index + 1}</span>{tab.label}</button>)}</div>
        {caseStudy.map((content, index) => <div key={content.id} className="case-panel" role="tabpanel" id={`case-panel-${index}`} aria-labelledby={`case-tab-${index}`} tabIndex={0} hidden={active !== index}><h3>{content.title}</h3><p>{content.body}</p><ul>{content.points.map(point => <li key={point}><Icon name="check" size={15} />{point}</li>)}</ul></div>)}
      </div>
      <div className="case-workbench">
        <div className={`case-diagram ${offline ? 'is-offline' : ''}`}>
          <div className="diagram-heading"><span className="mono-label">Two paths. One experience.</span><span className="diagram-mode-label">{offline ? 'Offline path' : 'Cloud path'}</span></div>
          <div className="diagram-client"><span className="diagram-icon"><Icon name="layers" size={24} /></span><div><strong>React interface</strong><small>Stock · Search · CRUD</small></div><span className="diagram-mode">Optimistic UI</span></div>
          <div className="diagram-trunk" /><span className="diagram-switch-label">VITE_USE_MOCK_API</span>
          <div className="diagram-branches"><div className={`data-path ${!offline ? 'active' : ''}`}><div className="path-line" /><Icon name="globe" size={26} /><strong>Cloud mode</strong><span>Express REST API</span><i className="vertical-arrow">↓</i><div className="persistence-node"><Icon name="database" size={18} /><span>Neon PostgreSQL</span></div></div><div className={`data-path ${offline ? 'active' : ''}`}><div className="path-line" /><Icon name="shield" size={26} /><strong>Demo mode</strong><span>No network required</span><i className="vertical-arrow">↓</i><div className="persistence-node"><Icon name="database" size={18} /><span>localStorage</span></div></div></div>
        </div>
        <StockSimulator offline={offline} onModeChange={() => setOffline(value => !value)} />
      </div>
    </div>
  </section>;
}
