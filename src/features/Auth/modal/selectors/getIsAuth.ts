import {StateSchema} from "src/main_app/providers/store";

export const getIsAuth = (state: StateSchema) => state.login.isAuth;
