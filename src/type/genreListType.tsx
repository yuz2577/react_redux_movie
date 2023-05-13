import { setGenreList } from "../api/action";

export type GENRE_LIST = {
  genreList: any[];
  genreType: object;
};

export type setGenreListAction = ReturnType<typeof setGenreList>;
