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
                <Image
                    className={cl.image}
                    src={image}
                    alt={name}
                    width={160}
                    height={230}
                />
            </div>
            <div className={cl.name}>
                {name}
            </div>
        </div>
    );
};
