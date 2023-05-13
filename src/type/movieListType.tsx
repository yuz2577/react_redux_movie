import { setMovieList } from "../api/action";

export type MOVIE_LIST = {
  movieList: any[];
};

export type setMovieListAction = ReturnType<typeof setMovieList>;
