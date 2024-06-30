export interface Film {
    id: string;
    title: string;
    description: string;
    genre: string;
    rating: string;
    release_year: number;
    poster: string;
}

export interface FilmParams {
    release_year: string;
    genre: string;
    title: string;
    page: number;
}

export interface FilmsResponse {
    total_pages: number;
    search_result: Film[];
}