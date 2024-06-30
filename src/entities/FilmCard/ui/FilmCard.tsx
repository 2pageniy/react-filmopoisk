import {FC} from "react";
import {useNavigate} from "react-router-dom";
import {DisplayField} from "src/shared/ui/DisplayField";
import {Rating} from "src/entities/Rating";

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
    const navigate = useNavigate();

    const onClickFilm = () => {
        navigate(`/movie/${id}`);
    };

    return (
        <div
            onClick={onClickFilm}
            className={cl.card}
        >
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
                rating={+rating}
                onFocus={false}
                cls={cl.rating}
            />
        </div>
    );
};
