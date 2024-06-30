import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {DisplayField} from "src/shared/ui/DisplayField";
import {SetRating} from "src/features/SetRating";

import cl from './FilmCard.module.scss';


interface FilmCardProps {
    id: string;
    name: string;
    genre: string;
    yearRelease: number;
    description: string;
    image: string;
    rating: string;
}

export const FilmCard: FC<FilmCardProps> = ({
    id,
    name,
    genre,
    yearRelease,
    description,
    image,
    rating
}) => {
    return (
        <Link
            href={`/movie/${id}`}
            className={cl.card}
        >
            <Image
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
            <SetRating
                initialRating={+rating}
                movieId={id}
            />
        </Link>
    );
};
