import {LoginSchema} from "src/features/Auth/";
import {store} from "./store";
import {useDispatch} from "react-redux";
import {filmsApi} from "src/features/FilmList/api/getFilms";
import {filmsDetailsApi} from "src/features/FilmDetails/api/getDetailsFilm";

export type StateSchema = {
    login: LoginSchema;
    [filmsApi.reducerPath]: ReturnType<typeof filmsApi.reducer>;
    [filmsDetailsApi.reducerPath]: ReturnType<typeof filmsDetailsApi.reducer>;
}

export type ThunkConfig<RejectValue = string> = {
    rejectValue: RejectValue;
    state: StateSchema;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch<AppDispatch>;