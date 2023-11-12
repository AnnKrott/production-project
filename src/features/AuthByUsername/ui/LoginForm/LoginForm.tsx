import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import classes from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import { loginActions } from '../../model/slice/LoginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginstate'
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const onUsernameChange = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onPasswordChange = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(LoginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(classes.LoginForm, {}, [className])}>
      <Text title={t('Authentication')} />
      <Input
        type='text'
        placeholder={t('Username')}
        autofocus
        onChange={onUsernameChange}
        value={username}
      />
      <Input
        type='text'
        placeholder={t('Password')}
        onChange={onPasswordChange}
        value={password}
      />
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        onClick={onLoginClick}
        disabled={isLoading}
      >
          {t('Login')}
      </Button>
       {error && <Text theme={TextTheme.ERROR} text={error} ></Text>}
    </div>
  )
})
