import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LoginForm.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
          <Input
            type='text'
            placeholder={t('Login')}
            autofocus
          />
          <Input
            type='text'
            placeholder={t('Password')}
          />
          <Button theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Login')}</Button>
        </div>
  )
}
