import classNames from "classnames";
import {FC, ReactNode} from "react";

import cl from './Card.module.scss';

interface CardProps {
    title: string;
    cls?: string;
    sizeTitle?: 'medium' | 'small';
    children: ReactNode;
    controls?: ReactNode;
    aside?: ReactNode;
}

export const Card: FC<CardProps> = ({
    title,
    cls,
    sizeTitle = 'medium',
    children,
    controls
}) => {
    return (
        <div
            onMouseDown={(e) => {
                e.stopPropagation();
            }}
            className={classNames(cl.card, cls)}
        >
            <div className={cl.header}>
                <h3 className={classNames(cl.title, cl[sizeTitle])}>
                    {title}
                </h3>
                {controls}
            </div>
            <div className={cl.content}>
                {children}
            </div>
        </div>
    );
};
