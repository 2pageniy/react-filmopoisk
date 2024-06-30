import {FC, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {FilmCard} from "src/entities/FilmCard";
import {Pagination} from "src/entities/Pagination";
import {Loader} from "src/shared/ui/Loader";
import {useGetFilmsQuery} from "../api/getFilms";

import cl from "src/widgets/Films/ui/Films.module.scss";

interface FilmListProps {
    genre: string;
    yearRelease: string;
    search: string;
}

export const FilmList: FC<FilmListProps> = ({
    genre,
    yearRelease,
    search,
}) => {
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState<number>(
        +(searchParams.get('page') as string) === 0 ? 1 : +(searchParams.get('page') as string)
    );
    const {data, isFetching, error} = useGetFilmsQuery({
        genre,
        release_year: yearRelease,
        page,
        title: search
    }, {
        refetchOnMountOrArgChange: true
    });

    if (isFetching) {
        return (
            <Loader />
        );
    }

    if (error) {
        return (
            <>
                Ошибка
            </>
        );
    }

    return (
        <>
            {data?.search_result.map((film) => (
                <FilmCard
                    key={film.id}
                    id={film.id}
                    name={film.title}
                    genre={film.genre}
                    yearRelease={film.release_year}
                    description={film.description}
                    image={film.poster}
                    rating={film.rating}
                />
            ))}
            {data?.search_result?.length !== 0 && (
                <Pagination
                    setPage={setPage}
                    page={page}
                    maxPage={data?.total_pages || 0}
                />
            )}
            {data?.search_result?.length === 0 && (
                <div
                    className={cl.empty}
                >
                    <h2>
                        Фильмы не найдены
                    </h2>
                    <p>
                        Измените запрос и попробуйте снова
                    </p>
                </div>
            )}
        </>
    );
};
