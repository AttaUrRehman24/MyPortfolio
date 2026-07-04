'use client'

import { useEffect } from 'react'
import { TweakColor, TweakRadio, TweakSection, TweaksPanel, useTweaks } from '@/components/TweaksPanel'

export const PALETTES = [
  ['#2563EB', '#60A5FA', '#1D4ED8', '#0F172A'],
  ['#7F56D9', '#A78BFA', '#5B21B6', '#130F26'],
  ['#059669', '#6EE7B7', '#047857', '#071E15'],
  ['#0EA5E9', '#7DD3FC', '#0369A1', '#0B1220'],
] as const

type TweakState = {
  palette: string[]
  personality: string
  texture: string
}

const DEFAULTS: TweakState = {
  palette: [...PALETTES[0]],
  personality: 'Bold',
  texture: 'Glow',
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

function applyTweaks(t: TweakState) {
  const root = document.documentElement
  const [accent, accentL, accentD, darkBg] = t.palette

  root.style.setProperty('--orange', accent)
  root.style.setProperty('--orange-l', accentL)
  root.style.setProperty('--orange-d', accentD)
  root.style.setProperty('--glow-rgb', hexToRgb(accent))

  ;['#services', '#about'].forEach((sel) => {
    const el = document.querySelector(sel) as HTMLElement | null
    if (!el) return
    const orig = el.dataset.origBg || el.style.background
    el.dataset.origBg = el.dataset.origBg || orig
    el.style.background = orig.includes('bg-dark.jpg') ? `url('/images/bg-dark.jpg') center/cover no-repeat, ${darkBg}` : darkBg
  })

  document.querySelectorAll('section.rounded-section').forEach((el) => {
    const node = el as HTMLElement
    if (node.style.background?.includes('bg-dark.jpg') || getComputedStyle(node).backgroundImage.includes('bg-dark')) {
      node.style.background = `url('/images/bg-dark.jpg') center/cover no-repeat, ${darkBg}`
    }
  })

  document.body.dataset.personality = t.personality.toLowerCase()
  document.body.dataset.texture = t.texture.toLowerCase()
}

export default function PortfolioTweaks() {
  const [t, setTweak] = useTweaks(DEFAULTS)

  useEffect(() => {
    applyTweaks(t)
  }, [t.palette, t.personality, t.texture])

  return (
    <div id="tweaks-root">
      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand Palette" />
        <TweakColor label="Mood" value={t.palette} options={PALETTES.map((p) => [...p])} onChange={(v) => setTweak('palette', v)} />
        <TweakSection label="Personality" />
        <TweakRadio label="Shape" value={t.personality} options={['Bold', 'Refined', 'Sharp']} onChange={(v) => setTweak('personality', v)} />
        <TweakSection label="Dark Sections" />
        <TweakRadio label="Texture" value={t.texture} options={['Glass', 'Matte', 'Glow']} onChange={(v) => setTweak('texture', v)} />
      </TweaksPanel>
    </div>
  )
}
