import {Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "src/page/Main";

export const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />,
        },
    ]);
    return (
        <Suspense fallback=''>
            <RouterProvider router={router} />
        </Suspense>
    );
}
