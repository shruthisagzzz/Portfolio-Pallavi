import { ArrowDown, ArrowRight, Code2, Download, GraduationCap, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { SkillNetwork } from '../components/SkillNetwork'
import { projects } from '../data/portfolio'

export function HomePage() {
  return <>
    <section className="hero-section route-hero" id="top">
      <div className="hero-copy"><div className="eyebrow status"><span /> Open to internships & graduate roles</div><h1>Building intelligent systems for <em>real-world</em> impact.</h1><p className="hero-intro">I&apos;m <strong>Pallavi Pradhanya</strong>, a Computer Science (AI & ML) student turning ideas into useful software—from computer vision tools to secure intelligent systems.</p><div className="hero-actions"><Link className="button" to="/projects">Explore my work <ArrowDown size={17} /></Link><a className="text-link" href="/Pallavi-Pradhanya-Resume.pdf" download><Download size={17} /> Download resume</a></div><div className="hero-meta"><span><MapPin size={16} /> Bengaluru, India</span><span><GraduationCap size={16} /> Graduating 2027</span></div></div>
      <div className="hero-visual"><div className="portrait-frame"><span className="frame-label">PROFILE / 01</span><img src="/assets/pallavi-portrait.png" alt="Pallavi Pradhanya at Global Academy of Technology" /><div className="floating-note"><span className="note-icon"><Code2 size={18} /></span><div><strong>8.02 CGPA</strong><small>B.E. Computer Science · AI & ML</small></div></div></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
    </section>
    <section className="signal-strip" aria-label="Highlights"><div><strong>03</strong><span>AI projects</span></div><div><strong>01</strong><span>Industry internship</span></div><div><strong>03</strong><span>National & state honours</span></div><div className="signal-line">AI / SOFTWARE / SPORT</div></section>
    <section className="section network-section"><div className="section-heading section-heading-row"><div><span className="eyebrow">01 / Interactive capability map</span><h2>How the skills connect.</h2></div><p>A typed, interactive network showing the relationships between my languages, tools, and engineering foundations.</p></div><SkillNetwork /></section>
    <section className="section projects-section home-projects"><div className="section-heading section-heading-row"><div><span className="eyebrow">02 / Selected work</span><h2>Projects with purpose.</h2></div><Link className="section-link" to="/projects">View project architecture <ArrowRight size={18} /></Link></div><div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>
    <section className="route-cta"><span className="eyebrow">Beyond the landing page</span><h2>Experience, education, and the story behind the work.</h2><div><Link className="button" to="/about">Read about me <ArrowRight size={17} /></Link><Link className="text-link" to="/contact">Start a conversation</Link></div></section>
  </>
}
