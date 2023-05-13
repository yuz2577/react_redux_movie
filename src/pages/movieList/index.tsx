import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  getGenreList,
  getMovieList,
  setGenreType,
  setMovieInfo,
} from "../../api/action";
import { useInView } from "react-intersection-observer";
import { setGenreList, setMovieList } from "../../api/action";
import { useSelector } from "react-redux";
const MovieListPage = () => {
  const MovieContainer = styled.div`
    .movie_detail_info {
      width: 100%;
      border: solid 2px blue;
    }
  `;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [page, setPage] = useState(1);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  const { genreType, genreList } = useSelector((state: any) => state.genreList);
  console.log(genreList, "<gen");
  const { movieList } = useSelector((state: any) => state.movieList);
  const state = useSelector((state: any) => state);
  console.log(state);
  const handleUrl = async (data: any) => {
    console.log(data, "<data");
    dispatch(setMovieInfo({ ...data }));
    navigate(`/movie/${data.title}`);
  };

  const addPage = () => {
    setPage(page + 1);
    console.log("더해졌다!");
  };

  const fetchMediaProvider = async (page: number, genre: string) => {
    const res = await getMovieList(page, genre);
    interface movieArrProvider {
      genre_ids: any;
    }
    const movieArr: Array<movieArrProvider> = [...movieList, ...res.results];
    movieArr.map((v: any, i: any) => {
      var genreArr: any = [];
      v.genre_ids.map((a: any) =>
        genreList.map((value: any, index: any) => {
          if (a === value.id) {
            genreArr.push({ name: value.name, id: value.id });
            v.genre_ids = genreArr;
          }
        })
      );
    });
    dispatch(setMovieList(movieArr));
    console.log(movieArr, "?????");
    setMovieList(movieArr);
    setFetchSuccess(true);
  };

  const fetchData = async (page: number, genre: string) => {
    const genreList = await getGenreList();
    dispatch(setGenreList(genreList.genres));
    const res = await getMovieList(page, "");
    console.log(res, "<Resres");

    res.results.map((v: any, i: any) => {
      var genreArr: any = [];
      console.log(v.genre_ids, "<v.genre_ids");
      v.genre_ids.map((a: any) =>
        genreList.map((value: any, index: any) => {
          if (a === value.id) {
            genreArr.push({ name: value.name, id: value.id });
            v.genre_ids = genreArr;
          }
        })
      );
    });
    dispatch(setMovieList(res.results));
  };

  useEffect(() => {
    if (movieList.length === 0) {
      fetchData(page, genreType.id);
    } else {
      fetchMediaProvider(page, genreType.id);
    }
  }, [page]);

  console.log(page, page);

  useEffect(() => {
    console.log(ref, "<Ref?");
    if (inView) {
      console.log("ggggggggggg");
      addPage();
    }
  }, [inView, fetchSuccess]);

  return (
    <>
      <div className="movie_list_container">
        <p>Netflix, Disney, Naver-Movie 통계</p>

        <ul>
          {movieList?.map(
            (v: any, i: any) =>
              i < movieList.length - (movieList.length % 3) && (
                <li onClick={() => handleUrl(v)}>
                  <div className="rank">{i + 1}</div>
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${v.poster_path}`}
                    alt=""
                  />
                  <div className="movie_info_box">
                    <p>{v.title}</p>
                    <div
                      className="movie_detail_info"
                      style={{
                        width: "100px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {v.release_date}
                      <br />
                      {v.genre_ids.map((v: any, i: number) => v.name) +
                        " "}{" "}
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
        {movieList?.length > 0 && <div ref={ref}>loading</div>}
      </div>
    </>
  );
};

export default MovieListPage;
