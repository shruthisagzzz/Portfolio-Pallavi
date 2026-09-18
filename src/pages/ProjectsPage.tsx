import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/portfolio'

export function ProjectsPage() {
  return <>
    <section className="page-hero page-hero-projects"><span className="eyebrow">Projects / 03 selected</span><h1>Systems designed around <em>real problems.</em></h1><p>From quantum-resistant IoT security to accessible computer vision, each project starts with a clear user or systems challenge.</p></section>
    <section className="section project-architecture"><div className="architecture-rail"><span>DISCOVER</span><i/><span>DESIGN</span><i/><span>BUILD</span><i/><span>VALIDATE</span></div><div className="project-list detailed-projects">{projects.map((project)=><ProjectCard project={project} detailed key={project.slug}/>)}</div></section>
    <section className="route-cta compact"><span className="eyebrow">Interested in the implementation?</span><h2>Let&apos;s discuss the thinking behind the work.</h2><Link className="button" to="/contact">Contact Pallavi <ArrowRight size={17}/></Link></section>
  </>
}
