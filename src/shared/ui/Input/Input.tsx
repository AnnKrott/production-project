import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Input.module.scss'
import React, { memo, type InputHTMLAttributes, useState, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type: string
  autofocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    onChange,
    type = 'text',
    value,
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>()

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  return (
        <div className={classNames(classes.InputWrapper, {}, [])}>
          {placeholder &&
            <div className={classes.placeholder}>
              {`${placeholder} >`}
            </div>
          }
          <div className={classes['caret-wrapper']}>
            <input
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={classes.input}
              onFocus={onFocus}
              onBlur={onBlur}
              onSelect={onSelect}
              {...otherProps}
              ref={ref}
            />
            {isFocused &&
            <span
              className={classes.caret}
              style={{ left: `${caretPosition * 8.8}px` }}
            ></span>
            }
          </div>
        </div>
  )
})
