import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  getCrntMovies,
  initMovieInfo,
  setMovieInfo,
  setThumbList,
} from "../../api/action";
// import { getImgData, movieSearch } from "../../api/action";
import config from "../../api/config";
import { parsing } from "../../carwling";

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
        margin: 10px 0;
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
  const navigate = useNavigate();
  const crntList = useSelector((state: any) => state.thumbList.thumbList);
  console.log(crntList);

  const handleUrl = (data: any) => {
    navigate(`curMovie/${data.movieNm}`);
    dispatch(setMovieInfo({ ...data }));
  };

  const fetchData = async () => {
    const crntMoviesRes = await getCrntMovies(config.MY_KEY, config.today);
    const crntMovieList = crntMoviesRes.boxOfficeResult.dailyBoxOfficeList;
    const imgParsingList = await parsing("영화순위");
    console.log(imgParsingList, "<parsing");
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
  };
  useEffect(() => {
    // if (!crntList?.img) {
    dispatch(initMovieInfo([]));
    fetchData();
    // }
  }, []);

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
