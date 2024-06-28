import {StateSchema} from "src/app/providers/store";

export const getLoginName = (state: StateSchema) => state.login.name;
