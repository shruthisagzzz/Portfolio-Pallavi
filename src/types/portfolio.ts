import type { ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'

export type ProjectAccent = 'blue' | 'lime' | 'violet'

export type PortfolioProject = {
  number: string
  slug: string
  title: string
  type: string
  description: string
  challenge: string
  outcome: string
  tags: string[]
  accent: ProjectAccent
  icon: ComponentType<LucideProps>
}

export type SkillGroup = {
  title: string
  value: string
}

export type SkillKind = 'core' | 'ai' | 'web' | 'data' | 'systems'

export type SkillNodeData = {
  label: string
  detail: string
  kind: SkillKind
}
