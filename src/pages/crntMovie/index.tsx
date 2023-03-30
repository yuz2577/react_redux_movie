import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import {
  getCrntMovies,
  initMovieInfo,
  setLoading,
  setMovieInfo,
  setTabState,
  setThumbList,
} from "../../api/action";
// import { getImgData, movieSearch } from "../../api/action";
import config from "../../api/config";
import { detailParsing, parsing } from "../../carwling";

const CrntMoviePage = () => {
  const CrntBox = styled.div`
    /* border: solid 2px blue; */
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        width: 156px;
        /* border: solid 2px blue; */
        border: solid 1px #e6e6e6;
        overflow: hidden;
        height: 300px;
        margin-bottom: 20px;
        .rank {
          position: absolute;
          width: 25px;
          height: 25px;
          background: #bdbdbdbb;
          color: white;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          height: 220px;
        }
        .movie_info_box {
          padding: 5px;
          p {
            font-size: 12px;
            font-weight: 600;
            margin: 0;
            width: 140px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .movie_detail_info {
            margin-top: 3px;
            font-size: 11.5px;
          }
        }
      }
    }
  `;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const crntList = useSelector((state: any) => state.currentList.currentList);
  const data = useSelector((state: any) => state.loading.loading);
  console.log(data);
  console.log(crntList);

  const handleUrl = async (data: any) => {
    dispatch(setMovieInfo({ ...data }));
    navigate(`/curMovie/${data.movieNm}`);
  };

  const fetchData = async () => {
    dispatch(setLoading(true));
    const crntMoviesRes = await getCrntMovies(config.MY_KEY, config.today);
    const crntMovieList = crntMoviesRes.boxOfficeResult.dailyBoxOfficeList;
    const imgParsingList = await parsing("영화순위");
    crntMovieList.map((v: any, i: number) => {
      // v.parsingData = imgParsingList[i]
      // if (v.movieNm === )
      imgParsingList.map((val: any, idx: number) => {
        if (v.movieNm.slice(0, 6) === val.title.slice(0, 6)) {
          v.parsingData = val;
        }
      });
    });
    dispatch(setThumbList(crntMovieList));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    dispatch(initMovieInfo([]));
    if (crntList.length === 0) {
      fetchData();
    }
    // }
  }, []);

  useEffect(() => {
    if (["/current", "/"].includes(location.pathname)) {
      dispatch(setTabState("current"));
    }
  }, [location.pathname]);

  return (
    <CrntBox>
      <ul>
        {crntList.map((v: any, i: any) => (
          <li onClick={() => handleUrl(v)}>
            <div className="rank">{i + 1}</div>
            <img src={v?.parsingData?.img} />
            <div className="movie_info_box">
              <p>{v.movieNm}</p>
              <div className="movie_detail_info">
                개봉: {v.openDt} <br />
                관객수: {v.audiAcc}명<br />
                관객증감률: {v.audiChange}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CrntBox>
  );
};

export default CrntMoviePage;
