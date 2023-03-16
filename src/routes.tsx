import DefaultPage from "./pages/crntMovie/index";
import MovieListPage from "./pages/movieList/index";


export const routes: Array<object> = [
    {
        path: "/",
        exact: true,
        strict: false,
        element: <DefaultPage />
    },
    {
        path: "/movieList",
        exact: true,
        strict: false,
        element: <MovieListPage />
    }
]