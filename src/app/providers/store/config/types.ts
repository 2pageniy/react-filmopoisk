import {LoginSchema} from "src/features/Auth/";
import {store} from "./store";
import {useDispatch} from "react-redux";

export type StateSchema = {
    login: LoginSchema
}

export type ThunkConfig<RejectValue = string> = {
    rejectValue: RejectValue;
    state: StateSchema;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()