import {StateSchema} from "src/app/providers/store";

export const getLoginPassword = (state: StateSchema) => state.login.password;