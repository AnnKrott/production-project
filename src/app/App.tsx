import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './provider/ThemeProvider'
import { Suspense, useEffect } from 'react'
import { AppRouter } from './provider/router'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>

                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>

            </Suspense>
        </div>
  )
}

export default App
