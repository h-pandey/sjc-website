import { motion, useInView, type Variants } from 'framer-motion'
import clsx from 'clsx'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const offsets = {
    up: { y: 32, x: 0 },
    left: { y: 0, x: -32 },
    right: { y: 0, x: 32 },
    none: { y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
      <span className="h-px w-8 bg-amber-500/60" />
      {children}
    </span>
  )
}

export function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={clsx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <SectionLabel>{subtitle ?? 'Overview'}</SectionLabel>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  )
}

export function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
}: {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost' | 'outline'
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'

  const variants = {
    primary:
      'bg-amber-500 text-steel-950 hover:bg-amber-400 hover:shadow-[0_0_32px_rgba(245,158,11,0.35)]',
    ghost: 'text-slate-300 hover:bg-white/5 hover:text-white',
    outline:
      'border border-white/15 text-white hover:border-amber-500/50 hover:bg-amber-500/10',
  }

  const className = clsx(base, variants[variant])

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    if (isExternal) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export function StatCounter({
  value,
  suffix = '',
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl font-bold text-white sm:text-5xl">
        {count}
        <span className="text-amber-500">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm',
        hover && 'transition-all duration-300 hover:border-amber-500/25 hover:bg-white/[0.05]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 mesh-gradient opacity-80" />
      <div className="absolute inset-0 grid-overlay" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
