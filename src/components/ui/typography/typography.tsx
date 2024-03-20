import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type ColorTheme = 'accent' | 'danger' | 'dark' | 'info' | 'light' | 'success' | 'warning'
type Variant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

type TypographyProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  colorBalance?: 100 | 300 | 500 | 700 | 900
  colorTheme?: ColorTheme
  variant?: Variant
} & ComponentPropsWithoutRef<T>

export const Typography = forwardRef<ElementRef<ElementType>, TypographyProps<ElementType>>(
  (
    {
      as: Component = 'span',
      children,
      className,
      colorBalance = 100,
      colorTheme = 'light',
      variant = 'body1',
      ...restProps
    },
    ref
  ) => {
    const classNames = clsx(s.default, className, s[variant], s[`${colorTheme}-${colorBalance}`])

    return (
      <Component className={classNames} ref={ref} {...restProps}>
        {children}
      </Component>
    )
  }
)
