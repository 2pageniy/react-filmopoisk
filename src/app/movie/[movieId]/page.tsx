import React from 'react';
import FilmDetailsPage from "src/page/FilmDetails/ui/FilmDetailsPage";
import {Navbar} from "src/widgets/Navbar";
import {StoreProvider} from "src/main_app/providers/store";

interface FilmDetailsParams {
    params: {
        movieId: string
    };
}

const Page = ({params}: FilmDetailsParams) => {
    return (
        <StoreProvider>
            <Navbar />
            <FilmDetailsPage
                id={params.movieId}
            />
        </StoreProvider>

    );
};

export default Page;