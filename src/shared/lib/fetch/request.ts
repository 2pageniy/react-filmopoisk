import {API_URL} from "src/shared/const/api";

interface RequestOptions {
    method?: 'GET' | 'POST';
    body?: unknown;
}

export const request = async (url: string, {
    method = 'GET',
    body
}: RequestOptions) => {
    const response = await fetch(`${API_URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : undefined
    });

    return response.json();
}