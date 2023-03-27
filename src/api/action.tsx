import axios from "axios";
import movieInfo from "../reducer/movieInfoReducer";
import * as mainListType from "../type/mainListType";
import * as movieInfoType from "../type/movieInfoType";
import * as loadingType from "../type/loadingType";

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
    `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=50&ServiceKey=${"4T88O7K8R0551122Z490"}&title=${title}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

// ---------------------------------------------------------- //

export const setThumbList = (thumbItemlist: mainListType.thumbItem[]) => ({
  type: "SET_THUMBLIST",
  payload: thumbItemlist,
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
