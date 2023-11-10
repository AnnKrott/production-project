import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = () => {
    setIsAuthModal(false)
  }

  const onShowModal = () => {
    setIsAuthModal(true)
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
