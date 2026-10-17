import { useState } from 'react';
import { skillGroups, projects, projectUsesSkill } from '../data/portfolioData';
import Icon from './Icon';

export default function Skills({ selectedSkill, selectSkill }) {
  const [filter, setFilter] = useState('All tools');
  const filtered = filter === 'All tools' ? skillGroups : skillGroups.filter(group => group.name === filter);
  const matches = projects.filter(project => projectUsesSkill(project, selectedSkill));
  return <section id="skills" className="section skills-section" aria-labelledby="skills-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow"><span>04</span> My working toolkit</p><h2 id="skills-title">The right tool.<br className="mobile-break" /><span> For the right problem.</span></h2></div><p>Across the stack, from a shell script<br className="desktop-break" /> to a cloud deployment.</p></div>
    <div className="skill-filters" role="group" aria-label="Filter technologies">{['All tools', ...skillGroups.map(group => group.name)].map(name => <button key={name} type="button" className={filter === name ? 'active' : ''} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}</div>
    <div className="skill-selection-status" role="status">{selectedSkill ? <><span>{matches.length ? `${selectedSkill} → ${matches.map(project => project.title).join(', ')}` : `${selectedSkill} is in my toolkit; no featured project currently lists it.`}</span>{matches.length > 0 && <a href="#projects">View highlighted work <Icon name="arrow" size={14} /></a>}<button type="button" onClick={() => selectSkill(selectedSkill)}>Clear <Icon name="close" size={12} /></button></> : <span>Select a skill to highlight matching projects. Use ↗ to open its official documentation.</span>}</div>
    <div className="skills-grid">{filtered.map(group => <section className="skill-group" key={group.name}><h3><Icon name={['code', 'layers', 'database', 'terminal'][skillGroups.indexOf(group)]} size={18} />{group.name}<span>{String(group.items.length).padStart(2, '0')}</span></h3><div className="skill-badges">{group.items.map(([name, url]) => <div className={`skill-pill${selectedSkill === name ? ' selected' : ''}`} key={name}><button type="button" aria-label={`Highlight projects using ${name}`} aria-pressed={selectedSkill === name} onClick={() => selectSkill(name)}>{name}</button><a href={url} target="_blank" rel="noreferrer" aria-label={`${name} official website or documentation (opens in new tab)`}><Icon name="external" size={12} /></a></div>)}</div></section>)}</div>
  </div></section>;
}
