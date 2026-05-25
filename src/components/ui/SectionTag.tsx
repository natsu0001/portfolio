import { cn } from '@/lib/utils'

interface SectionTagProps {
  num: string
  className?: string
}

export function SectionTag({ num, className }: SectionTagProps) {
  return (
    <span className={cn('font-mono-custom text-xs text-text-3 tracking-wider', className)}>
      {num}
    </span>
  )
}
