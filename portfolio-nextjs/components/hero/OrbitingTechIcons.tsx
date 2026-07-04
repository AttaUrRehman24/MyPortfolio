'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'

export type TechIcon = {
  name: string
  Icon: IconType
  color: string
  /** degrees, -90 = top */
  angle: number
}

type OrbitingTechIconsProps = {
  items: TechIcon[]
  revealed: boolean
  /** 'orbit' = desktop ring only; 'mobile' = scroll row only; 'both' = default */
  variant?: 'orbit' | 'mobile' | 'both'
}

const ORBIT_DURATION = 40
const MOBILE_SCROLL_DURATION = 28

function useOrbitRadius() {
  const [radius, setRadius] = useState(210)

  useEffect(() => {
    const update = () => {
      setRadius(window.innerWidth < 1024 ? 160 : 210)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return radius
}

function TechCard({ tech }: { tech: TechIcon }) {
  return (
    <div className="group relative">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-md transition-shadow duration-300 group-hover:shadow-xl sm:h-12 sm:w-12"
        title={tech.name}
      >
        <tech.Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: tech.color }} aria-hidden />
      </div>
      <span className="pointer-events-none absolute -bottom-7 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 font-body text-[10px] font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {tech.name}
      </span>
      <span className="sr-only">{tech.name}</span>
    </div>
  )
}

export default function OrbitingTechIcons({ items, revealed, variant = 'both' }: OrbitingTechIconsProps) {
  const reduceMotion = useReducedMotion()
  const radius = useOrbitRadius()
  const showOrbit = variant === 'orbit' || variant === 'both'
  const showMobile = variant === 'mobile' || variant === 'both'
  const orbitSpin = reduceMotion ? false : true

  return (
    <>
      {/* Desktop / tablet orbit — always spinning */}
      {showOrbit && (
        <div
          className="pointer-events-none absolute inset-0 z-20 overflow-visible hidden sm:block"
          aria-hidden={!revealed}
        >
          <motion.div
            className="absolute left-1/2 top-[48%] h-0 w-0"
            initial={{ rotate: 0 }}
            animate={orbitSpin ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            {items.map((tech) => (
              <div
                key={tech.name}
                className="absolute left-0 top-0"
                style={{
                  transform: `rotate(${tech.angle}deg) translateX(${radius}px)`,
                  transformOrigin: '0 0',
                }}
              >
                <motion.div
                  initial={{ rotate: -tech.angle }}
                  animate={orbitSpin ? { rotate: -tech.angle - 360 } : { rotate: -tech.angle }}
                  transition={{ duration: ORBIT_DURATION, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                  style={{ originX: 0, originY: 0 }}
                >
                  <div style={{ transform: 'translate(-50%, -50%)' }}>
                    <motion.div
                      className="pointer-events-auto"
                      whileHover={reduceMotion ? undefined : { scale: 1.15 }}
                    >
                      <TechCard tech={tech} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Mobile: auto-scrolling row */}
      {showMobile && (
        <div className="w-full overflow-hidden pb-2 sm:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            className="hero-mobile-icon-track flex w-max gap-2"
            initial={{ x: 0 }}
            animate={orbitSpin ? { x: '-50%' } : { x: 0 }}
            transition={{ duration: MOBILE_SCROLL_DURATION, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            {[...items, ...items].map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex-shrink-0">
                <TechCard tech={tech} />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </>
  )
}
