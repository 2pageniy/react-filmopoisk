import {FC, useState} from "react";
import {useSelector} from "react-redux";
import {Rating} from "src/entities/Rating";
import {getIsAuth} from "src/features/Auth";
import {RATING_LOCAL_STORAGE} from "src/shared/const/localStorage.ts";
import {RateMovieParams} from "src/features/FilmDetails/modal/types.ts";

import cl from "src/features/FilmDetails/ui/FilmDetails.module.scss";

interface SetRatingProps {
    initialRating: number;
    movieId: string;
    rateMovie: (params: RateMovieParams) => void;
    details?: boolean;
}

export const SetRating: FC<SetRatingProps> = ({
    initialRating,
    movieId,
    rateMovie,
    details = false
}) => {
    const isAuth = useSelector(getIsAuth);
    const [isFocus, setIsFocus] = useState(false);
    const [rating, setRating] = useState(0);
    const ratingUser = JSON.parse(localStorage.getItem(RATING_LOCAL_STORAGE) || '{}')[movieId];
    return (
        <Rating
            rating={(isAuth && isFocus) ? rating : ((details && ratingUser) || +initialRating)}
            onFocus={isAuth && isFocus}
            cls={cl.rating}
            setRating={setRating}
            setFocus={setIsFocus}
            onClick={() => {
                if (isAuth) {
                    rateMovie({
                        movieId,
                        user_rate: rating
                    });
                }
            }}
        />
    );
};
