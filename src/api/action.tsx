import axios from "axios";

export const getCrntMovies = async (id: string, date: string) => {
  return await fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${id}&targetDt=${date}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const getImgData = async () => {
  const naverUrl = `/v1/search/movie.json`;
  const resp = await axios.get(naverUrl, {
    params: {
      query: "아이언맨",
    },
    headers: {
      "Content-Type": "application/json",
      "X-Naver-Client-Id": "vUPBSTgO9wgxOgDuMC5I",
      "X-Naver-Client-Secret": "ZZxhdiY1fK",
    },
  });
  console.log(resp);
  // resp.json().then((data) => {
  //   console.log(data);
  // });
};

const naverMovieSearch = axios.create({
  headers: {
    "X-Naver-Client-Id": "vUPBSTgO9wgxOgDuMC5I",
    "X-Naver-Client-Secret": "ZZxhdiY1fK",
  },
});

// export const movieSearch = async () => {
//   await naverMovieSearch.get("/v1/search/movie.json", {
//     params: { query: "아이언맨" },
//   });
// };

// export const movieSearch = async () => {
//   await axios.get("/v1/search/movie.json", {
//     params: {
//       query: "아이언맨",
//     },
//     headers: {
//       "X-Naver-Client-Id": "vUPBSTgO9wgxOgDuMC5I",
//       "X-Naver-Client-Secret": "ZZxhdiY1fK",
//     },
//   });
// };

export const movieSearch = async () => {
  return await fetch(
    `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&listCount=50&ServiceKey=${"4T88O7K8R0551122Z490"}&title=${"스즈메의 문단속"}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
