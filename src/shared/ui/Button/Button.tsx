import { classNames } from "shared/lib/classNames/classNames";
import classes from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
    BASE = 'base',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.BASE,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
};


