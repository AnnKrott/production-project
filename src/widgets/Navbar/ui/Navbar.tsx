import { classNames } from "shared/lib/classNames/classNames";
import classes from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";


interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classes.links}>
                <AppLink
                    to='/'
                    className={classes.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    to Main Page
                </AppLink>

                <AppLink
                    to='/about'
                    className={classes.mainLink}
                    theme={AppLinkTheme.INVERTED}
                >
                    to About Page
                </AppLink>
            </div>
        </div >
    )
};







