import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = () => {
    setIsAuthModal(prev => !prev)
  }

  return (
        <div className={classNames(classes.Navbar, {}, [className])}>

            <div ></div>

            <Button
              className={classes.links}
              onClick={onToggleModal}
              theme={ButtonTheme.BASE}
            >
              {t('Login')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('lorem-ipsum-dolor')}
            </Modal>

        </div >
  )
}
