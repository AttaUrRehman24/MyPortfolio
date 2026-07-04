'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ')
}

const glassButtonVariants = cva(
  'glass-button relative isolate cursor-pointer rounded-[8px] transition-all',
  {
    variants: {
      size: {
        default: 'text-base font-medium',
        sm: 'text-sm font-medium',
        lg: 'text-lg font-medium',
        xl: 'text-lg font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

const glassButtonTextVariants = cva(
  'glass-button-text relative block select-none tracking-tighter',
  {
    variants: {
      size: {
        default: 'px-6 py-3.5',
        sm: 'px-4 py-2',
        lg: 'px-8 py-4',
        xl: 'px-10 py-[18px] sm:px-12 sm:py-5',
        icon: 'flex h-10 w-10 items-center justify-center',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export interface GlassButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    VariantProps<typeof glassButtonVariants> {
  className?: string
  contentClassName?: string
  href?: string
  variant?: 'primary' | 'ghost'
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, size, contentClassName, href, variant = 'primary', ...props }, ref) => {
    const wrapClass = cn(
      'glass-button-wrap cursor-pointer rounded-[8px]',
      variant === 'primary' ? 'glass-button-wrap--primary' : 'glass-button-wrap--ghost',
      className
    )

    const inner = (
      <>
        <span className={cn(glassButtonTextVariants({ size }), contentClassName)}>{children}</span>
      </>
    )

    if (href) {
      return (
        <div className={wrapClass}>
          <a className={cn('glass-button', glassButtonVariants({ size }))} href={href}>
            {inner}
          </a>
          <div className="glass-button-shadow rounded-[8px]" aria-hidden />
        </div>
      )
    }

    return (
      <div className={wrapClass}>
        <button
          className={cn('glass-button', glassButtonVariants({ size }))}
          ref={ref}
          type="button"
          {...props}
        >
          {inner}
        </button>
        <div className="glass-button-shadow rounded-[8px]" aria-hidden />
      </div>
    )
  }
)
GlassButton.displayName = 'GlassButton'

export { GlassButton, glassButtonVariants }
