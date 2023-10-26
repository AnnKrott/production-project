import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebarWidth = () => {
    setCollapsed(prev => !prev)
  }

  return (
        <div className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}>

            <button onClick={toggleSidebarWidth}>Collapse sidebar</button>

            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
  )
}
