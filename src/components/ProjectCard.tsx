import type { PortfolioProject } from '../types/portfolio'

type ProjectCardProps = { project: PortfolioProject; detailed?: boolean }

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const Icon = project.icon
  return (
    <article className={`project-card project-${project.accent}`}>
      <div className="project-topline"><span>{project.number}</span><span>{project.type}</span></div>
      <div className="project-icon"><Icon size={30} strokeWidth={1.6} /></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {detailed && <div className="project-details"><div><span>Challenge</span><p>{project.challenge}</p></div><div><span>Outcome</span><p>{project.outcome}</p></div></div>}
      <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  )
}
