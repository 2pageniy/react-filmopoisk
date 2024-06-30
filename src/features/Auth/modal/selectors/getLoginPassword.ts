import {StateSchema} from "src/main_app/providers/store";

export const getLoginPassword = (state: StateSchema) => state.login.password;