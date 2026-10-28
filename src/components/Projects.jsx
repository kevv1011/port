import { projects, projectUsesSkill } from '../data/portfolioData';
import Icon from './Icon';
import ProjectPreview from './ProjectPreview';

export default function Projects({ selectedSkill, clearSkill }) {
  const matches = projects.filter(project => projectUsesSkill(project, selectedSkill));
  return <section className="section projects-section" id="projects" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow"><span>01</span> Selected work</p><h2 id="projects-title">Less talk. <span>More shipped.</span></h2></div><p>Real problems, considered decisions,<br className="desktop-break" /> and software that sees them through.</p></div>
      {selectedSkill && <div className="project-match-summary"><span>{matches.length ? `${matches.length} projects use ${selectedSkill}` : `No featured projects currently list ${selectedSkill}`}</span><button type="button" onClick={clearSkill}>Clear selection <Icon name="close" size={13} /></button></div>}
      <div className="project-grid">{projects.map(project => {
        const matched = projectUsesSkill(project, selectedSkill);
        return <article className={`project-card accent-${project.accent}${matched ? ' skill-match' : ''}`} key={project.id}>
          <ProjectPreview type={project.id} />
          <div className="project-details">
            <p className="project-category">{project.category}</p>
            <div className="project-title-row"><h3>{project.title}</h3><span className="project-index">/{project.number}</span></div>
            {matched && <p className="project-match-label"><Icon name="check" size={13} />Uses {selectedSkill}</p>}
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="outcome-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
            <p className="project-problem"><span>The problem</span>{project.problem}</p><p className="project-result">{project.result}</p>
            <ul className="tech-tags" aria-label={`${project.title} technologies`}>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            {project.note && <p className="project-availability">{project.note}</p>}
            <div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Try ${project.title} demo`}>Try demo <Icon name="external" size={15} /></a>}{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} ${project.profileLink ? 'GitHub collection' : 'source code'}`}><Icon name="github" size={16} />{project.profileLink ? 'Explore GitHub' : 'Source code'}<Icon name="external" size={15} /></a> : <a href="#contact">Discuss this build <Icon name="arrow" size={15} /></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live app`}>Live app <Icon name="external" size={15} /></a>}{project.id === 'tindahan' && <a href="#case-study">Read case study <Icon name="arrow" size={15} /></a>}</div>
          </div>
        </article>;
      })}</div>
      <p className="project-footnote"><Icon name="code" size={14} />Previews are illustrative, interactive UI studies of the systems described.</p>
    </div>
  </section>;
}
