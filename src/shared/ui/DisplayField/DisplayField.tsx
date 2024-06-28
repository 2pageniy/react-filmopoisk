import {FC} from "react";

import cl from './DisplayField.module.scss';

interface DisplayFieldProps {
    title: string;
    content: string | number;
}

export const DisplayField: FC<DisplayFieldProps> = ({
    title,
    content
}) => {
    return (
        <div className={cl['display-field']}>
            <div className={cl.title}>
                {title}
            </div>
            <div className={cl.content}>
                {content}
            </div>
        </div>
    );
};
