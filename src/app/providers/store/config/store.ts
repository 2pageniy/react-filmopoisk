import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "src/app/providers/store/config/types";
import {loginReducer} from "src/features/Auth";
import {filmsApi} from "src/features/FilmList/api/getFilms.ts";
import {filmsDetailsApi} from "src/features/FilmDetails/api/getDetailsFilm.ts";

const rootReducer: ReducersMapObject<StateSchema> = {
    login: loginReducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
    [filmsDetailsApi.reducerPath]: filmsDetailsApi.reducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmsApi.middleware).concat(filmsDetailsApi.middleware),
});