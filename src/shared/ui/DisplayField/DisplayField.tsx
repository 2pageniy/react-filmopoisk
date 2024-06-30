'use client';

import {FC} from "react";
import classNames from "classnames";

import cl from './DisplayField.module.scss';

interface DisplayFieldProps {
    title: string;
    content: string | number;
    style?: 'standard' | 'bold';
}

export const DisplayField: FC<DisplayFieldProps> = ({
    title,
    content,
    style = 'standard'
}) => {
    return (
        <div className={classNames(cl['display-field'], cl[style])}>
            <div className={cl.title}>
                {title}
                {style === 'bold' ? ':' : ''}
            </div>
            <div className={cl.content}>
                {content}
            </div>
        </div>
    );
};
