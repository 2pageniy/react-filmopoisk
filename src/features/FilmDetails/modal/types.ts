import type {Film} from "src/features/FilmList";

interface Actor {
    name: string;
    photo: string;
}

export interface FilmDetails extends Film {
    actors: Actor[];
    total_rates_count: string;
}

export interface FilmParams {
    id: string;
}

export type FilmDetailsResponse = FilmDetails;

export interface RateMovieParams {
    movieId: string,
    user_rate: number;
}

export interface RateMovieResponse {
    movieId: string;
    newAverageRate: string;
    newTotalRatesCount: number;
}
