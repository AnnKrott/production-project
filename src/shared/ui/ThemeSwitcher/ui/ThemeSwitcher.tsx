import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/provider/ThemeProvider'
import IconLight from 'shared/assets/icons/theme-light.svg'
import IconDark from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button
            theme={ThemeButton.BASE}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <IconLight /> : <IconDark />}
        </Button>
  )
}
