import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'
import { getUserAuthData, userActions } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = () => {
    setIsAuthModal(false)
  }

  const onShowModal = () => {
    setIsAuthModal(true)
  }

  const onLogout = () => {
    dispatch(userActions.logout())
  }

  if (authData) {
    return (
      <div className={classNames(classes.Navbar, {}, [className])}>
        <Button
              className={classes.links}
              onClick={onLogout}
              theme={ButtonTheme.BASE}
            >
              {t('Sign out')}
            </Button>
      </div>
    )
  }

  return (
        <div className={classNames(classes.Navbar, {}, [className])}>

            <div ></div>

            <Button
              className={classes.links}
              onClick={onShowModal}
              theme={ButtonTheme.BASE}
            >
              {t('Login')}
            </Button>

            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />

        </div >
  )
}
