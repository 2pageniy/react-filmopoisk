import {ChangeEvent, FC, InputHTMLAttributes} from "react";
import classNames from "classnames";

import cl from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    error?: boolean;
    cls?: string;
}

export const Input: FC<InputProps> = ({
    cls = '',
    value,
    onChange = () => {},
    error = false,
    ...props
}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={classNames(cl.input, {[cl['input-error']]: error}, cl[cls])}
            onChange={onChangeHandler}
            value={value}
            {...props}
        />
    );
};
