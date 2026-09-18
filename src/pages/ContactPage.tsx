import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react'

export function ContactPage() {
  return <>
    <section className="contact-page">
      <div className="contact-page-copy"><span className="eyebrow">Contact / New opportunities</span><h1>Let&apos;s build something <em>meaningful.</em></h1><p>I&apos;m open to AI/ML internships, graduate software roles, and conversations about thoughtful technology.</p><div className="contact-primary"><a className="button" href="mailto:pradhanyapallavi@gmail.com">Email me <ArrowRight size={18}/></a><a className="text-link" href="/Pallavi-Pradhanya-Resume.pdf" download><Download size={17}/> Download resume</a></div></div>
      <aside className="contact-panel"><span className="panel-label">DIRECT CHANNELS</span><a href="mailto:pradhanyapallavi@gmail.com"><Mail/><div><span>Email</span><strong>pradhanyapallavi@gmail.com</strong></div></a><a href="tel:+919945583516"><Phone/><div><span>Phone</span><strong>+91 99455 83516</strong></div></a><div><MapPin/><div><span>Location</span><strong>Nagarbhavi, Bengaluru</strong></div></div><p>Typical response time<br/><strong>Within 24–48 hours</strong></p></aside>
    </section>
    <section className="contact-values"><div><span>01</span><h3>AI/ML internships</h3><p>Applied machine learning, computer vision, and intelligent product development.</p></div><div><span>02</span><h3>Graduate software roles</h3><p>Frontend, full-stack, and data-informed software engineering opportunities.</p></div><div><span>03</span><h3>Project collaboration</h3><p>Student research, hackathons, and technology with measurable social value.</p></div></section>
  </>
}
