import MovieDetailPage from "./pages/movieList/DetailPage";
import CurrentDetailPage from "./pages/crntMovie/DetailPage";
import DefaultPage from "./pages/crntMovie/index";
import MovieListPage from "./pages/movieList/index";

export const routes: Array<object> = [
  {
    path: "/",
    exact: true,
    strict: false,
    element: <DefaultPage />,
  },
  {
    path: "/current",
    exact: true,
    strict: false,
    element: <DefaultPage />,
  },
  {
    path: "/curMovie/:title",
    exact: true,
    strict: false,
    element: <CurrentDetailPage />,
  },
  {
    path: "/movie/:id",
    exact: true,
    strict: false,
    element: <MovieDetailPage />,
  },
  {
    path: "/movie",
    exact: true,
    strict: false,
    element: <MovieListPage />,
  },
];
