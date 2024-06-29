import {FC} from "react";
import {Card} from "src/shared/ui/Card";
import {Select} from "src/shared/ui/Select/Select";
import {GENRES, TGenresKeys, TYearsKeys, YEARS} from "../const/const.ts";

import cl from './FiltersFilm.module.scss';

interface FiltersFilmProps {
    setGenre: (value: TGenresKeys) => void;
    setYearRelease: (value: TYearsKeys) => void;
    initialGenre: TGenresKeys;
    initialYearRelease: TYearsKeys;
}

const FiltersFilm: FC<FiltersFilmProps> = ({
    setGenre,
    setYearRelease,
    initialGenre,
    initialYearRelease
}) => {
    return (
        <Card
            title='Фильтр'
            sizeTitle='small'
            cls={cl.card}
        >
            <div className={cl.filters}>
                <Select
                    optionsList={Object.entries(GENRES).map(([key, value]) => ({
                        value: key,
                        key: value,
                    }))}
                    onSelect={(value) => setGenre(value as TGenresKeys)}
                    label='Жанр'
                    placeholder='Выберите жанр'
                    name='genre'
                    initialSelected={initialGenre === '0' ? undefined : GENRES[initialGenre]}
                />
                <Select
                    optionsList={Object.entries(YEARS).map(([key, value]) => ({
                        value: key,
                        key: value,
                    }))}
                    onSelect={(value) => setYearRelease(value as TYearsKeys)}
                    label='Год выпуска'
                    placeholder='Выберите год'
                    name='year'
                    initialSelected={initialYearRelease === '0' ? undefined : YEARS[initialYearRelease]}
                />
            </div>
        </Card>
    );
};

export default FiltersFilm;