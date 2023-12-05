import classes from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { type SideBarItemType } from 'widgets/Sidebar/model/items'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

interface SidebarItemProps {
  item?: SideBarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.INVERTED}
      className={classNames(classes.item, { [classes.collapsed]: collapsed })}
    >
      <item.Icon className={classes.icon}/>
      <span className={classes.link}>
        {t(item.text)}
      </span>
    </AppLink>
  )
})
