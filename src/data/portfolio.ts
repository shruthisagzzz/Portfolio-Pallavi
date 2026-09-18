import { BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react'
import type { PortfolioProject, SkillGroup } from '../types/portfolio'

export const projects: PortfolioProject[] = [
  {
    number: '01', slug: 'post-quantum-threat-detection', title: 'Post-Quantum Threat Detection', type: 'Cybersecurity · IoT · AI',
    description: 'A security framework that uses post-quantum cryptographic algorithms to detect, classify, and respond to emerging threats across critical IoT networks in real time.',
    challenge: 'Protect constrained IoT environments from evolving attacks without relying on cryptography that quantum systems may weaken.',
    outcome: 'A layered concept combining post-quantum protection, autonomous classification, and response orchestration.',
    tags: ['Post-quantum cryptography', 'Threat detection', 'IoT'], icon: ShieldCheck, accent: 'blue',
  },
  {
    number: '02', slug: 'ai-interview-assistant', title: 'AI Interview Assistant', type: 'Generative AI · Web application',
    description: 'An interview preparation platform that runs realistic mock interviews and returns focused feedback on response quality and technical accuracy.',
    challenge: 'Make interview practice feel realistic while turning every answer into feedback a student can act on immediately.',
    outcome: 'A guided practice loop covering question delivery, response analysis, and technical feedback.',
    tags: ['Artificial intelligence', 'Feedback systems', 'React'], icon: BrainCircuit, accent: 'lime',
  },
  {
    number: '03', slug: 'hand-sign-translator', title: 'Hand Sign Translator', type: 'Computer vision · Accessibility',
    description: 'A real-time hand sign recognition system that combines landmark detection and gesture recognition to translate signs through a live camera feed.',
    challenge: 'Recognize hand gestures reliably despite variation in position, movement, and camera conditions.',
    outcome: 'A real-time Python pipeline using MediaPipe landmarks and OpenCV-based visual processing.',
    tags: ['Python', 'OpenCV', 'MediaPipe'], icon: Sparkles, accent: 'violet',
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Languages', value: 'Java · Python · SQL · JavaScript' },
  { title: 'Web', value: 'React.js · HTML5 · CSS3' },
  { title: 'AI & Data', value: 'Machine Learning · Computer Vision · NumPy · Pandas' },
  { title: 'Databases', value: 'MySQL · PostgreSQL · MongoDB' },
  { title: 'Core CS', value: 'DSA · OOP · DBMS · OS · Computer Networks' },
]
