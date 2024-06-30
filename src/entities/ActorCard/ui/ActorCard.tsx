'use client';

import cl from './ActorCard.module.scss';
import {FC} from "react";
import Image from "next/image";

interface ActorCardProps {
    image: string;
    name: string;
}

export const ActorCard: FC<ActorCardProps> = ({
    image,
    name,
}) => {
    return (
        <div
            className={cl.card}
        >
            <div
            >
                <img
                    className={cl.image}
                    src={image}
                    alt={name}
                />
            </div>
            <div className={cl.name}>
                {name}
            </div>
        </div>
    );
};
