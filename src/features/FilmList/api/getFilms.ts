import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {API_URL} from "src/shared/const/api.ts";
import {addQueryParams} from "src/shared/lib/url/addQueryParams.ts";
import type {FilmParams, FilmsResponse} from "../modal/types";

export const filmsApi = createApi({
    reducerPath: 'filmsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getFilms: builder.query<FilmsResponse, FilmParams>({
            query: (params) => {
                const {genre, release_year, title, page} = params;
                const genreParam = genre === '' || genre === '0' ? undefined : genre;
                const releaseYearParam = release_year === '' || release_year === '0' ? undefined : release_year;
                const titleParams = title === '' ? undefined : title;

                addQueryParams({
                    genre: genreParam,
                    release_year: releaseYearParam,
                    title: titleParams,
                    page: page.toString()
                });

                return {
                    url: 'v1/search',
                    params: {
                        page,
                        genre: genreParam,
                        release_year: releaseYearParam,
                        title: titleParams
                    }
                }

            },

        }),
    }),
})

export const { useGetFilmsQuery } = filmsApi