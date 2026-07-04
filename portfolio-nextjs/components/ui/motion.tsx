'use client'

import { motion, useInView, useMotionValue, useSpring, type Variants } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const slideInVariants = (dir: 'left' | 'right' = 'left'): Variants => ({
  hidden: { opacity: 0, x: dir === 'left' ? -48 : 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
})

/** Fade + rise into view. */
export function FadeUp({
  children,
  delay = 0,
  className,
  style,
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: 'div' | 'section' | 'li' | 'article' | 'span'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      variants={{ hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, delay } } }}
    >
      {children}
    </MotionTag>
  )
}

/** Stagger container — children should use <StaggerItem>. */
export function Stagger({
  children,
  className,
  style,
  gap = 0.08,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  gap?: number
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style} variants={fadeUpVariants}>
      {children}
    </motion.div>
  )
}

/** Slide from a direction. */
export function SlideIn({
  children,
  dir = 'left',
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode
  dir?: 'left' | 'right'
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      variants={{ hidden: { opacity: 0, x: dir === 'left' ? -48 : 48 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut, delay } } }}
    >
      {children}
    </motion.div>
  )
}

/** Animated number counter that runs when scrolled into view. */
export function Counter({
  to,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className,
  style,
}: {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(to * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

/** Magnetic wrapper — element subtly follows the cursor. */
export function Magnetic({ children, strength = 0.35, className, style }: { children: React.ReactNode; strength?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={className} style={{ ...style, x: sx, y: sy, display: 'inline-block' }} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </motion.div>
  )
}
