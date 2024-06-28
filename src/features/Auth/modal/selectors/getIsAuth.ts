import {StateSchema} from "src/app/providers/store";

export const getIsAuth = (state: StateSchema) => state.login.isAuth;
