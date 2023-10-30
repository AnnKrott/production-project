import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
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
              >
              Collapse sidebar
              </Button>

            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
  )
}
