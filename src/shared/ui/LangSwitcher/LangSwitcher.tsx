import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (

        <Button
            className={classNames(classes.LangSwitcher, {}, [className])}
            onClick={toggleLang}
            theme={ThemeButton.BASE}
        >
            {t('Русский')}
        </Button>

  )
}
