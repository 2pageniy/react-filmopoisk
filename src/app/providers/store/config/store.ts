import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "src/app/providers/store/config/types";
import {loginReducer} from "src/features/Auth";

const rootReducer: ReducersMapObject<StateSchema> = {
    login: loginReducer
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});