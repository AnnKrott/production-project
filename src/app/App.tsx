import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './provider/ThemeProvider'

import 'app/styles/index.scss'
import { AppRouter } from './provider/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

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
