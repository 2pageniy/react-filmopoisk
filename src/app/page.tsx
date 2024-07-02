import React from 'react';
import {MainPage} from "src/page/Main";
import {StoreProvider} from "src/main_app/providers/store";
import {Navbar} from "src/widgets/Navbar";

const Page = () => {
    return (
        <StoreProvider>
            <Navbar />
            <MainPage />
        </StoreProvider>
    );
};

export default Page;