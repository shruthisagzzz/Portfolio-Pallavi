import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() { return <section className="not-found"><span className="eyebrow">404 / Route not found</span><h1>This node isn&apos;t connected.</h1><p>The page may have moved or the address is incomplete.</p><Link className="button" to="/"><ArrowLeft size={17}/> Back home</Link></section> }
