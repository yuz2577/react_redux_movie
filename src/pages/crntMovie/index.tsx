import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  getCrntMovies,
  getDetailMovieDT,
  setThumbList,
} from "../../api/action";
// import { getImgData, movieSearch } from "../../api/action";
import config from "../../api/config";
import { parsing } from "../../carwling";
import { RootState } from "../../rootReducer";

const CrntMoviePage = () => {
  const dispatch = useDispatch();
  const crntList = useSelector((state: RootState) => state.thumbList);
  console.log(crntList);
  const fetchData = async () => {
    const crntMoviesRes = await getCrntMovies(config.MY_KEY, config.today);
    const crntMovieList = crntMoviesRes.boxOfficeResult.dailyBoxOfficeList;

    // const result = await getDetailMovieDT();
    // console.log(result);
    // 줄거리, 출연진, 국가 등 기타 세부 정보
    const curr = await parsing("현재상영영화순위");

    // curr.map((v, i) => {
    //   if (i < 10) {
    // crntMovieList.map((val: any, idx: any) => {
    //   val.img = v.idx;
    // });
    //   }
    // });

    dispatch(setThumbList(crntMovieList));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>gg</div>;
};

export default CrntMoviePage;
