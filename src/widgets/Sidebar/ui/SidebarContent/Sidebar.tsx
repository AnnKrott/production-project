import classes from './Sidebar.module.scss'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import MainIcon from 'shared/assets/icons/sidebar-main.svg'
import AboutIcon from 'shared/assets/icons/sidebar-about.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation()

  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebarWidth = () => {
    setCollapsed(prev => !prev)
  }

  return (
        <div
        className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        data-testid="sidebar"
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={toggleSidebarWidth}
            className={classes.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.L}
          >
            {collapsed ? '>' : '<'}
          </Button>

          <div className={classes.items}>

              <AppLink
                to={RoutePath.main}
                theme={AppLinkTheme.INVERTED}
                className={classes.item}
              >
                <MainIcon className={classes.icon} />
                <span className={classes.link}>
                  {t('Main Page')}
                </span>
              </AppLink>

              <AppLink
                to={RoutePath.about}
                theme={AppLinkTheme.INVERTED}
                className={classes.item}
              >
                <AboutIcon className={classes.icon}/>
                <span className={classes.link}>
                  {t('About page')}
                </span>
              </AppLink>
          </div>

          <div className={classes.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} />
          </div>
        </div>
  )
}
