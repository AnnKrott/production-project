import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/sidebar-main.svg'
import AboutIcon from 'shared/assets/icons/sidebar-about.svg'
import ProfileIcon from 'shared/assets/icons/sidebar-profile.svg'

export interface SideBarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Main Page',
    Icon: MainIcon
  },
  {
    path: RoutePath.about,
    text: 'About Page',
    Icon: AboutIcon
  },
  {
    path: RoutePath.profile,
    text: 'Profile Page',
    Icon: ProfileIcon
  }
]
