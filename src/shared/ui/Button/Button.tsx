import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

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
}

export const Button: FC<ButtonProps> = (props) => {
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
}
