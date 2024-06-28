import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {LoginSchema} from "../types/types";
import {loginByUsername} from "src/features/Auth/modal/services/loginByUsername";
import {AUTH_TOKEN_LOCAL_STORAGE} from "src/shared/const/localeStorage.ts";

const initialState: LoginSchema = {
    name: '',
    password: '',
    isAuth: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        init: (state) => {
            const getToken = localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE);
            if (getToken) {
                state.isAuth = true;
            }
        },
        logout: (state) => {
            localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE);
            state.isAuth = false;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;

        },
        reset: (state) => {
            state.name = '';
            state.password = '';
        },
    },
    extraReducers: builder => {
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            if (action.payload.token) {
                localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE, action.payload.token);
                state.isAuth = true;
            }
        });
    }
});


export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
