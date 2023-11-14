import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import classes from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import { loginActions, loginReducer } from '../../model/slice/LoginSlice'
import { LoginByUsername } from '../../model/services/LoginByUsername/LoginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { DynamicModuleLoader, type reducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface LoginFormProps {
  className?: string
}

const initialReducers: reducersList = {
  login: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  )
})

export default LoginForm
