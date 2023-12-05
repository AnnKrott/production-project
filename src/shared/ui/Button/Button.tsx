import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { type ReactNode, type ButtonHTMLAttributes, type FC, memo } from 'react'

export enum ButtonTheme {
  BASE = 'base',
  BASE_INVERTED = 'base-inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    square,
    disabled,
    size = ButtonSize.M,
    theme = ButtonTheme.BASE,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [classes.square]: square,
    [classes.disabled]: disabled
  }

  return (
        <button
            type="button"
            className={
              classNames(classes.Button,
                mods,
                [className, classes[theme], classes[size]])}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </button>
  )
})
