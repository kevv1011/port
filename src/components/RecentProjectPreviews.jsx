import { useState } from 'react';

export function RunwayPreview() {
  const [hidden, setHidden] = useState(false);
  const amount = value => hidden ? '••••' : value;
  return <div className="project-preview recent-preview runway-preview">
    <div className="preview-caption"><span>INTERACTIVE UI STUDY</span><span>WALLET / ANDROID</span></div>
    <div className="wallet-study">
      <div className="study-toolbar"><strong>runway<span>.</span></strong><button type="button" aria-pressed={hidden} onClick={() => setHidden(!hidden)}>{hidden ? 'Show amounts' : 'Hide amounts'}</button></div>
      <div className="wallet-balances" aria-live="polite"><div><span>Available money</span><strong>{amount('₱1,180')}</strong></div><div><span>Set aside</span><strong>{amount('₱300')}</strong></div></div>
      <div className="wallet-week"><span>This week’s spending</span><span>{amount('₱120')}</span></div>
      <div className="wallet-chart" role="img" aria-label={hidden ? 'Sample spending amounts hidden' : 'Sample week: 120 pesos spent on Wednesday; no other expenses'}>
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => <div key={index}><div className="wallet-bar-track"><i style={{ height: hidden ? '4px' : index === 2 ? '85%' : '4px' }} /></div><span>{day}</span></div>)}
      </div>
      <div className="wallet-widget"><span>Android widget</span><span>Balance + quick expense entry</span></div>
    </div>
    <span className="preview-hint">Sample wallet · Try the privacy control</span>
  </div>;
}

const routes = [
  { name: 'Clark', distance: '42', ascent: '380', path: 'M40 90C80 15 135 20 160 70S230 145 275 65S350 20 395 80' },
  { name: 'Arayat', distance: '85', ascent: '620', path: 'M40 90C70 145 110 135 140 60S215 25 240 90S320 145 345 55S380 40 395 80' },
];

export function EchelonPreview() {
  const [routeIndex, setRouteIndex] = useState(0);
  const route = routes[routeIndex];
  return <div className="project-preview recent-preview echelon-preview">
    <div className="preview-caption"><span>INTERACTIVE UI STUDY</span><span>PLAN / RIDE / EXPLORE</span></div>
    <div className="ride-study">
      <div className="study-toolbar"><strong>echelon<span>↗</span></strong><span className="study-label">Ride briefing</span></div>
      <div className="ride-presets" role="group" aria-label="Sample cycling routes">{routes.map((item, index) => <button type="button" key={item.name} aria-pressed={index === routeIndex} onClick={() => setRouteIndex(index)}>{item.name}</button>)}</div>
      <div className="ride-schematic"><svg viewBox="0 0 435 160" aria-hidden="true"><path className="ride-grid" d="M0 40H435M0 80H435M0 120H435M87 0V160M174 0V160M261 0V160M348 0V160" /><path className="ride-track" d={route.path} /><circle cx="40" cy="90" r="5" /><circle cx="395" cy="80" r="5" /></svg><span>SCHEMATIC ROUTE</span></div>
      <div className="ride-metrics" aria-live="polite"><div><strong>{route.distance}<small> km</small></strong><span>Preset distance</span></div><div><strong>{route.ascent}<small> m</small></strong><span>Preset ascent</span></div><div><strong>GPX</strong><span>Ride export</span></div></div>
    </div>
    <span className="preview-hint">Explore the presets · Planning values from the project</span>
  </div>;
}
