import {StateSchema} from "src/main_app/providers/store";

export const getLoginName = (state: StateSchema) => state.login.name;
