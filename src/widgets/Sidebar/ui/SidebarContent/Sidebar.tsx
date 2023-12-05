import classes from './Sidebar.module.scss'

import { memo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemList } from 'widgets/Sidebar/model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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

            {SidebarItemList.map((item) => (
              <SidebarItem item={item} collapsed={collapsed} key={item.path}/>
            ))}

          </div>

          <div className={classes.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} />
          </div>
        </div>
  )
})
