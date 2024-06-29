import {FC, useState} from "react";
import {Icon} from "src/shared/ui/Icon";
import LoaderIcon from "src/shared/assets/icons/loader.svg";
import {FilmCard} from "src/entities/FilmCard";
import {Pagination} from "src/entities/Pagination";
import {useGetFilmsQuery} from "../api/getFilms";

import cl from "src/widgets/Films/ui/Films.module.scss";
import {useSearchParams} from "react-router-dom";

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
    const {data, isFetching} = useGetFilmsQuery({
        genre,
        release_year: yearRelease,
        page,
        title: search
    }, {
        refetchOnMountOrArgChange: true
    });

    if (isFetching) {
        return (
            <Icon
                src={LoaderIcon}
                size='xlarge'
                cls={cl.loader}
            />
        );
    }

    return (
        <>
            {data?.search_result.map((film) => (
                <FilmCard
                    key={film.id}
                    name={film.title}
                    genre={film.genre}
                    yearRelease={film.release_year}
                    description={film.description}
                    image={film.poster}
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
