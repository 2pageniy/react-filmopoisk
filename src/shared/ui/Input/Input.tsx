import {ChangeEvent, FC, InputHTMLAttributes} from "react";
import classNames from "classnames";
import RequiredIcon from 'src/shared/assets/icons/required.svg';
import {Icon} from "src/shared/ui/Icon";

import cl from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    required?: boolean;
    error?: boolean;
    cls?: string;
}

export const Input: FC<InputProps> = ({
    cls,
    value,
    onChange = () => {},
    label,
    required,
    error = false,
    ...props
}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={cl['input-wrapper']}>
            {label && (
                <label className={cl.label}>
                    {label}
                    {required && (
                        <Icon
                            size='xsmall'
                            cls={cl.required}
                            src={RequiredIcon}
                        />
                    )}
                </label>
            )}
            <input
                className={classNames(cl.input, {[cl['input-error']]: error}, cls)}
                onChange={onChangeHandler}
                value={value}
                {...props}
            />
        </div>
    );
};
