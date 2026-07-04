'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const glassButton = cva('glass-btn', {
  variants: {
    variant: {
      primary: 'glass-btn--primary',
      ghost: 'glass-btn--ghost',
      outline: 'glass-btn--outline',
    },
    size: {
      sm: 'glass-btn--sm',
      md: 'glass-btn--md',
      lg: 'glass-btn--lg',
    },
    full: {
      true: 'glass-btn--full',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    full: false,
  },
})

type BaseProps = VariantProps<typeof glassButton> & {
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
}

type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    as?: 'button'
  }

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
    as: 'a'
    href: string
  }

type SiteGlassButtonProps = ButtonProps | AnchorProps

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path d="M1 17L17 1M17 1H5M17 1V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SiteGlassButton(props: SiteGlassButtonProps) {
  const { variant, size, full, className, children, icon, ...rest } = props as SiteGlassButtonProps & {
    [key: string]: unknown
  }

  const classes = [glassButton({ variant, size, full }), className].filter(Boolean).join(' ')
  const content = (
    <>
      <span className="glass-btn__label">{children}</span>
      <span className="glass-btn__icon">{icon ?? <ArrowIcon />}</span>
    </>
  )

  if ((props as AnchorProps).as === 'a') {
    const { as: _as, ...anchorRest } = rest as Record<string, unknown>
    return (
      <a className={classes} {...(anchorRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as Record<string, unknown>
  return (
    <button className={classes} {...(buttonRest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}

export { glassButton }
