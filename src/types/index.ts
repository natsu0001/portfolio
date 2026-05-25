export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  thumb: string
  link?: string
}

export interface Experience {
  id: string
  period: string
  role: string
  description?: string
  badge?: string
  isCurrent?: boolean
}

export interface Education {
  id: string
  degree: string
  year: string
  institution: string
  gpa?: string
  type: 'Degree' | 'Certificate'
  link?: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface TechCategory {
  label: string
  key: string
  items: TechItem[]
}

export interface Stat {
  value: string
  suffix?: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}
