import { setMovieInfo, setThumbList } from "../api/action";

export interface movieInfo {
  movieNm: string;
  genre: string;
  country: string;
  runtime: string;
  openDt: string;
  story: string;
  img: string;
  audiAcc: string;
}

export type MOVIEINFO = {
  movieInfo: Array<movieInfo>;
};

export type setMovieInfoAction = ReturnType<typeof setMovieInfo>;
