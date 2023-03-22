import React, { useEffect } from "react";
import { getCrntMovies, movieSearch } from "../../api/action";
// import { getImgData, movieSearch } from "../../api/action";
import config from "../../api/config";
import { parsing } from "../../carwling";

const CrntMoviePage = () => {
  const fetchData = async () => {
    const crntMoviesData = await getCrntMovies(config.MY_KEY, config.today);
    console.log(crntMoviesData);

    // const result = await movieSearch();
    // console.log(result);
    // 줄거리, 출연진, 국가 등 기타 세부 정보
    const curr = await parsing("현재상영영화crn순위");
    console.log(curr);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>gg</div>;
};

export default CrntMoviePage;
