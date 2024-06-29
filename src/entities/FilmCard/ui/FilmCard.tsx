import {FC} from "react";
import {DisplayField} from "src/shared/ui/DisplayField";
import {Rating} from "src/entities/Rating";

import cl from './FilmCard.module.scss';

interface FilmCardProps {
    name: string;
    genre: string;
    yearRelease: number;
    description: string;
    image: string;
}

export const FilmCard: FC<FilmCardProps> = ({
    name,
    genre,
    yearRelease,
    description,
    image
}) => {
    return (
        <div className={cl.card}>
            <img
                className={cl.image}
                src={image}
                alt={name}
            />
            <div className={cl.info}>
                <h3 className={cl.h3}>
                    {name}
                </h3>
                <DisplayField
                    title='Жанр'
                    content={genre}
                />
                <DisplayField
                    title='Год выпуска'
                    content={yearRelease}
                />
                <DisplayField
                    title='Описание'
                    content={description}
                />
            </div>
            <Rating
                rating={2}
                onFocus={false}
                cls={cl.rating}
            />
        </div>
    );
};
