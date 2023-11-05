import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (

        <Button
            className={classNames('', {}, [className])}
            onClick={toggleLang}
            theme={ButtonTheme.BASE}
        >
            {t(short ? 'RU' : 'Русский')}
        </Button>

  )
}
