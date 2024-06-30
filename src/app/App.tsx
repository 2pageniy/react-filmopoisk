import {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "src/page/Main";
import {FilmDetailsPage} from "src/page/FilmDetails";
import {Navbar} from "src/widgets/Navbar";
import {StoreProvider} from "src/app/providers/store";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
        {
            path: "/movie/:id",
            element: <FilmDetailsPage />,
        },
    ]);
    return (
        <StoreProvider>
            <Suspense fallback=''>
                <Navbar />
                <RouterProvider router={router} />
            </Suspense>
        </StoreProvider>
    );
}
