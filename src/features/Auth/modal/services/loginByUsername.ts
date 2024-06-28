import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "src/app/providers/store";
import {request} from "src/shared/lib/fetch/request.ts";

interface loginByUsernameResponse {
    token: string;
}

export const loginByUsername = createAsyncThunk<
    loginByUsernameResponse,
    void,
    ThunkConfig
>(
    'login/loginByUsername',
    async (_, {getState}) => {
        const state = getState();

        const name = state.login.name;
        const password = state.login.name;

        try {
            const response = await request('v1/login', {
                method: 'POST',
                body: {
                    username: name,
                    password: password,
                }
            });

            return response;
        } catch (e) {
            console.error(e);
        }
    },
)