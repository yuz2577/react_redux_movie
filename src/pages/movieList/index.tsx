import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getGenreList, getMovieList } from "../../api/action";
import { useInView } from "react-intersection-observer";

const MovieListPage = () => {
  const MovieContainer = styled.div`
    /* border: solid 2px blue; */
  `;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [movieList, setMovieList] = useState<any | null>([]);
  const [page, setPage] = useState(1);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const handleUrl = async (data: any) => {
    // dispatch(setMovieList({ ...data }));
    navigate(`/curMovie/${data.movieNm}`);
  };

  const addPage = () => {
    setPage(page + 1);
    console.log("더해졌다!");
  };

  const fetchMediaProvider = async (page: number) => {
    const genreList = await getGenreList();
    console.log(genreList);
    const res = await getMovieList(page);
    console.log(res);
    console.log(
      "https://www.themoviedb.org/t/p/w220_and_h330_face/z56bVX93oRG6uDeMACR7cXCnAbh.jpg"
    );
    const movieArr: any[] = [...movieList, ...res.results];
    console.log(movieArr, "?????");
    setMovieList(movieArr);
    setFetchSuccess(true);
  };

  console.log(movieList);
  console.log(movieList.length % 3, "page/20");

  useEffect(() => {
    fetchMediaProvider(page);
  }, [page]);

  useEffect(() => {
    console.log(ref, "<Ref?");
    if (inView && fetchSuccess) {
      console.log("ggggggggggg");
      addPage();
    }
  }, [inView, fetchSuccess]);

  return (
    <>
      <div className="movie_list_container">
        <p>Netflix, Disney, Naver-Movie 제공</p>
        <ul>
          {movieList?.map(
            (v: any, i: any) =>
              i < movieList.length - (movieList.length % 3) && (
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
              )
          )}
        </ul>
        {movieList?.length > 0 && <div ref={ref}>loading</div>}
      </div>
    </>
  );
};

export default MovieListPage;
