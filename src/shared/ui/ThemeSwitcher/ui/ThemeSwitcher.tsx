import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/provider/ThemeProvider'
import IconLight from 'shared/assets/icons/theme-light.svg'
import IconDark from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

import classes from './ThemeSwitcher.module.scss'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button
            theme={ButtonTheme.BASE}
            onClick={toggleTheme}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <IconLight /> : <IconDark />}
        </Button>
  )
})
