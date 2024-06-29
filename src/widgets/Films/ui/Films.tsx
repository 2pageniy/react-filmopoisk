import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import FiltersFilm from "src/entities/FiltersFilm/ui/FiltersFilm";
import {SearchInput} from "src/features/SearchInput";
import {FilmList} from "src/features/FilmList";
import {TGenresKeys, TYearsKeys} from "src/entities/FiltersFilm/const/const.ts";

import cl from './Films.module.scss';

export const Films = () => {
    const [searchParams] = useSearchParams();
    const [yearRelease, setYearRelease] = useState<TYearsKeys>(searchParams.get('release_year') as TYearsKeys ?? '0');
    const [genre, setGenre] = useState<TGenresKeys>(searchParams.get('genre') as TGenresKeys ?? '0');
    const [search, setSearch] = useState<string>(searchParams.get('title') as string ?? '');

    return (
        <div className={cl.wrapper}>
            <aside className={cl.filters}>
                <FiltersFilm
                    setGenre={setGenre}
                    setYearRelease={setYearRelease}
                    initialGenre={genre}
                    initialYearRelease={yearRelease}
                />
            </aside>
            <div className={cl.main}>
                <SearchInput
                    onSearch={setSearch}
                    cls={cl.search}
                    placeholder='Название фильма'
                    initialValue={search}
                />
                <FilmList
                    genre={genre}
                    yearRelease={yearRelease}
                    search={search}
                />
            </div>
        </div>
    );
};
