'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'

const TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;max-height:calc(100vh - 32px);display:flex;flex-direction:column;background:rgba(250,249,247,.78);color:#29261b;-webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);border:.5px solid rgba(255,255,255,.6);border-radius:14px;box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;overflow-y:auto}
  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-lbl{font-weight:500;color:rgba(41,38,27,.72)}
  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06)}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);transition:left .15s,width .15s}
  .twk-seg button{position:relative;z-index:1;flex:1;border:0;background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;border-radius:6px;cursor:pointer;padding:4px 6px}
  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;flex:1;min-width:0;height:46px;padding:0;border:0;border-radius:6px;overflow:hidden;cursor:pointer;box-shadow:0 0 0 .5px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;display:flex;flex-direction:column}
  .twk-chip>span>i{flex:1}
  .twk-toggle-fab{position:fixed;right:16px;bottom:16px;z-index:2147483645;width:44px;height:44px;border-radius:50%;border:0;background:rgba(0,0,0,.82);color:#fff;font-size:18px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.25)}
`

export function useTweaks<T extends Record<string, unknown>>(defaults: T): [T, (key: keyof T | Partial<T>, val?: unknown) => void] {
  const [values, setValues] = useState<T>(defaults)
  const setTweak = useCallback((keyOrEdits: keyof T | Partial<T>, val?: unknown) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : { [keyOrEdits as string]: val }
    setValues((prev) => ({ ...prev, ...edits }))
  }, [])
  return [values, setTweak]
}

export function TweaksPanel({ title = 'Tweaks', children }: { title?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const dragRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef({ x: 16, y: 16 })

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      const t = e?.data?.type
      if (t === '__activate_edit_mode') setOpen(true)
      else if (t === '__deactivate_edit_mode') setOpen(false)
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  if (!open) {
    return (
      <>
        <style>{TWEAKS_STYLE}</style>
        <button type="button" className="twk-toggle-fab" aria-label="Open tweaks" onClick={() => setOpen(true)}>
          ⚙
        </button>
      </>
    )
  }

  return (
    <>
      <style>{TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd">
          <b>{title}</b>
          <button type="button" className="twk-x" aria-label="Close tweaks" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <div className="twk-body">{children}</div>
      </div>
    </>
  )
}

export function TweakSection({ label }: { label: string }) {
  return <div className="twk-sect">{label}</div>
}

export function TweakRadio({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  const idx = Math.max(0, options.indexOf(value))
  return (
    <div className="twk-row">
      <div className="twk-lbl">{label}</div>
      <div className="twk-seg" role="radiogroup">
        <div className="twk-seg-thumb" style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${options.length})`, width: `calc((100% - 4px) / ${options.length})` }} />
        {options.map((o) => (
          <button key={o} type="button" role="radio" aria-checked={o === value} onClick={() => onChange(o)}>
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

function isLight(hex: string) {
  const h = hex.replace('#', '')
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0')
  const n = parseInt(x.slice(0, 6), 16)
  if (Number.isNaN(n)) return true
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return r * 299 + g * 587 + b * 114 > 148000
}

export function TweakColor({ label, value, options, onChange }: { label: string; value: string[]; options: string[][]; onChange: (v: string[]) => void }) {
  const cur = JSON.stringify(value)
  return (
    <div className="twk-row">
      <div className="twk-lbl">{label}</div>
      <div className="twk-chips" role="radiogroup">
        {options.map((palette, i) => {
          const [hero, ...rest] = palette
          const on = JSON.stringify(palette) === cur
          return (
            <button
              key={i}
              type="button"
              className="twk-chip"
              role="radio"
              aria-checked={on}
              data-on={on ? '1' : '0'}
              style={{ background: hero }}
              onClick={() => onChange(palette)}
              title={palette.join(' · ')}
            >
              {rest.length > 0 && (
                <span>
                  {rest.slice(0, 4).map((c, j) => (
                    <i key={j} style={{ background: c, display: 'block', flex: 1 }} />
                  ))}
                </span>
              )}
              {on && (
                <svg viewBox="0 0 14 14" style={{ position: 'absolute', top: 6, left: 6, width: 13, height: 13 }}>
                  <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" stroke={isLight(hero) ? 'rgba(0,0,0,.78)' : '#fff'} />
                </svg>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
