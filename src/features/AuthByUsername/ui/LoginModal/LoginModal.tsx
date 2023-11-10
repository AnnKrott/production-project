import { classNames } from 'shared/lib/classNames/classNames'
import classes from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'
import { Modal } from 'shared/ui/Modal/Modal'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const {
    className,
    isOpen,
    onClose
  } = props

  return (
        <Modal
        className={classNames(classes.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
        >
          <LoginForm />
        </Modal>
  )
}
