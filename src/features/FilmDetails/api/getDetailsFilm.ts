import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {API_URL} from "src/shared/const/api.ts";
import {FilmDetailsResponse, FilmParams, RateMovieParams, RateMovieResponse} from "../modal/types";
import {AUTH_TOKEN_LOCAL_STORAGE, RATING_LOCAL_STORAGE} from "src/shared/const/localStorage.ts";

export const filmsDetailsApi = createApi({
    reducerPath: 'filmsDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getDetailsFilm: builder.query<FilmDetailsResponse, FilmParams>({
            query: (params) => {
                return {
                    url: `v1/movie/${params.id}`,
                }
            },
        }),
        rateMovie: builder.mutation<RateMovieResponse, RateMovieParams>({
            query: (params) => {
                const token = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE);
                const ratings = JSON.parse(localStorage.getItem(RATING_LOCAL_STORAGE) || '{}') ;

                ratings[params.movieId] = params.user_rate;
                localStorage.setItem(RATING_LOCAL_STORAGE, JSON.stringify(ratings));

                return {
                    url: `v1/rateMovie`,
                    method: 'post',

                    body: params,

                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            },
        }),
    }),
})

export const { useGetDetailsFilmQuery, useRateMovieMutation } = filmsDetailsApi;
