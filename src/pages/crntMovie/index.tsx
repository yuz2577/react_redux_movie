import React, { useEffect } from "react";
import { getCrntMovies, movieSearch } from "../../api/action";
// import { getImgData, movieSearch } from "../../api/action";
import config from "../../api/config";

const CrntMoviePage = () => {
  console.log(config.today);

  const fetchData = async () => {
    const res = await getCrntMovies(config.MY_KEY, config.today);
    console.log(res);

    const result = await movieSearch();
    console.log(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>gg</div>;
};

export default CrntMoviePage;
