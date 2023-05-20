import axios from "axios";
import movieInfo from "../reducer/movieInfoReducer";
import * as mainListType from "../type/mainListType";
import * as movieInfoType from "../type/movieInfoType";
import * as loadingType from "../type/loadingType";
import { env } from "process";

export const getCrntMovies = async (id: string, date: string) => {
  return await fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${id}&targetDt=${date}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const getDetailMovieDT = async (title: string) => {
  return await fetch(
    `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=50&ServiceKey=4T88O7K8R0551122Z490&title=${title}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const getMovieList = async (page: number, genre: string) => {
  console.log(process.env.REACT_APP_TMDB_KEY);
  return await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY
    }&with_watch_providers=[8,96,337]&watch_region=KR&language=ko-KR&page=${page}${genre ? `&with_genres=${genre}` : ""
    }`
  ).then((res) => {
    return res.json();
  });
};

export const getGenreList = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR`
  ).then((res) => {
    return res.json();
  });
};

export const getMovieDetail = async (id: string) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR`
  ).then((res) => {
    return res.json();
  });
};

export const getMovieVideo = async (id: string) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=ko-KR`
  ).then((res) => {
    return res.json();
  });
};

// ---------------------------------------------------------- //

// 현재상영영화 (MAIN)
export const setThumbList = (thumbItemlist: mainListType.thumbItem[]) => ({
  type: "SET_THUMBLIST",
  payload: thumbItemlist,
});

// 영화순위
export const setMovieList = (movieList: any[]) => ({
  type: "SET_MOVIE_LIST",
  payload: movieList,
});

export const setMovieInfo = (movieInfo: movieInfoType.movieInfo[]) => ({
  type: "SET_MOVIEINFO",
  payload: movieInfo,
});

export const initMovieInfo = (movieInfo: movieInfoType.movieInfo[]) => ({
  type: "INIT_MOVIEINFO",
  payload: [],
});

export const setLoading = (loading: boolean) => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setTabState = (tabState: string) => ({
  type: "SET_TABSTATE",
  payload: tabState,
});

export const setGenreList = (genreList: any[]) => ({
  type: "SET_GENRE_LIST",
  payload: genreList,
});

export const setGenreType = (genreType: string) => ({
  type: "SET_GENRE_TYPE",
  payload: genreType,
});
