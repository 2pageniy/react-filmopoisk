import {FC, useCallback, useEffect, useState} from "react";
import {useGetDetailsFilmQuery, useRateMovieMutation} from "../api/getDetailsFilm";
import {Loader} from "src/shared/ui/Loader";
import {DisplayField} from "src/shared/ui/DisplayField";
import {ActorCard} from "src/entities/ActorCard";
import {Icon} from "src/shared/ui/Icon";
import {Button} from "src/shared/ui/Button";
import ArrowRightIcon from 'src/shared/assets/icons/arrow-right.svg';
import ArrowLeftIcon from 'src/shared/assets/icons/arrow-left.svg';
import {SetRating} from "src/features/SetRating";

import cl from './FilmDetails.module.scss';

interface FilmDetailsProps {
    id: string;
}

// 🙂🥺🐱
export const FilmDetails: FC<FilmDetailsProps> = ({
    id
}) => {
    const {data, isFetching} = useGetDetailsFilmQuery({id});
    const [rateMovie] = useRateMovieMutation();
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
    const [isManyActors, setIsManyActors] = useState(false);
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {
        if (ref) {
            if (ref.scrollWidth > document.body.clientWidth - 64) {
                setIsManyActors(true);
            }
        }
    }, [ref]);

    const onClickBtn = useCallback(() => {
        setIsMoved(!isMoved);
        if (ref) {
            if (isMoved) {
                ref.style.left = '0px';
            } else {
                ref.style.left = `${document.body.clientWidth - ref.scrollWidth - 64}px`;
            }
        }
    }, [ref, isMoved]);

    if (isFetching) {
        return (
            <Loader />
        );
    }

    if (!data) {
        return (
            'Нет фильма'
        );
    }

    return (
        <div
            className={cl.wrapper}
        >
            <div
                className={cl.card}
            >
                <img
                    className={cl.image}
                    src={data.poster}
                    alt={data.title}
                />
                <div className={cl.info}>
                    <h2 className={cl.h2}>
                        {data.title}
                    </h2>
                    <DisplayField
                        style='bold'
                        title='Жанр'
                        content={data.genre}
                    />
                    <DisplayField
                        style='bold'
                        title='Год выпуска'
                        content={data.release_year}
                    />
                    <DisplayField
                        style='bold'
                        title='Рейтинг'
                        content={data.rating}
                    />
                    <div className={cl.description}>
                        Описание
                    </div>
                    <div
                        className={cl['description-content']}
                    >
                        {data.description}
                    </div>
                </div>
                <SetRating
                    initialRating={+data.rating}
                    rateMovie={rateMovie}
                    movieId={id}
                    details
                />
            </div>
            <div
                className={cl['actors-title']}
            >
                Актёры
            </div>
            <div
                className={cl.actors}
            >
                {isMoved && (
                    <Button
                        btnType='transparent'
                        cls={cl['btn-prev']}
                        onClick={onClickBtn}
                    >
                        <Icon
                            src={ArrowLeftIcon}
                        />
                    </Button>
                )}
                <div
                    ref={(el) => setRef(el)}
                    className={cl['actors-wrapper']}
                >
                    {data.actors.map((actor, index) => (
                        <ActorCard
                            key={index}
                            image={actor.photo}
                            name={actor.name}
                        />
                    ))}
                </div>
                {isManyActors && !isMoved && (
                    <Button
                        btnType='transparent'
                        cls={cl['btn-next']}
                        onClick={onClickBtn}
                    >
                        <Icon
                            src={ArrowRightIcon}
                        />
                    </Button>
                )}
            </div>
        </div>
    );
};
