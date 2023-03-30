import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getGenreList, getMovieList } from "../../api/action";

const MovieListPage = () => {
  const MovieContainer = styled.div`
    /* border: solid 2px blue; */
    > p {
      display: flex;
      justify-content: flex-end;
    }
    ul {
      padding: 0;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      li {
        cursor: pointer;
        width: 120px;
        /* border: solid 2px blue; */
        border: solid 1px #e6e6e6;
        overflow: hidden;
        height: 250px;
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
          height: 180px;
        }
        .movie_info_box {
          padding: 5px;
          p {
            font-size: 12px;
            font-weight: 600;
            margin: 0;
            width: 110px;
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
  const [movieList, setMovieList] = useState([]);

  const handleUrl = async (data: any) => {
    // dispatch(setMovieList({ ...data }));
    navigate(`/curMovie/${data.movieNm}`);
  };

  const fetchMediaProvider = async () => {
    const genreList = await getGenreList();
    console.log(genreList);
    const res = await getMovieList();
    console.log(res);
    console.log(
      "https://www.themoviedb.org/t/p/w220_and_h330_face/z56bVX93oRG6uDeMACR7cXCnAbh.jpg"
    );
    setMovieList(res.results);
  };

  console.log(movieList);
  useEffect(() => {
    fetchMediaProvider();
    console.log("gggg");
  }, []);
  return (
    <MovieContainer>
      <p>Netflix, Disney, Naver-Movie 제공</p>
      <ul>
        {movieList?.map((v: any, i: any) => (
          <li onClick={() => handleUrl(v)}>
            <div className="rank">{i + 1}</div>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${v.poster_path}`}
            />
            <div className="movie_info_box">
              <p>{v.title}</p>
              <div className="movie_detail_info">
                {v.release_date}
                {/* 개봉: {v.openDt} <br />
                관객수: {v.audiAcc}명<br />
                관객증감률: {v.audiChange}% */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </MovieContainer>
  );
};

export default MovieListPage;
