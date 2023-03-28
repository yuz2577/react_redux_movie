import DetailPage from "./pages/crntMovie/DetailPage";
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
    element: <DetailPage />,
  },
  {
    path: "/movie/:title",
    exact: true,
    strict: false,
    element: <DetailPage />,
  },
  {
    path: "/movieList",
    exact: true,
    strict: false,
    element: <MovieListPage />,
  },
];
