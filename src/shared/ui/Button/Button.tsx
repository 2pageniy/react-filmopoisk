import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";

import cl from './Button.module.scss';

type ButtonType = 'primary' | 'clear' | 'transparent';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType;
    cls?: string;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    btnType = 'primary',
    cls,
    children,
    disabled,
    ...props
}) => {
    return (
        <button
            className={classNames(cl.btn, cl[`btn-${btnType}`], {[cl.disabled]: disabled}, cls)}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
