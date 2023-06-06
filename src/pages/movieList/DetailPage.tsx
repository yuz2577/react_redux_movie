import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { detailParsing, steelCutParsing } from "../../carwling";
import Line from "../../components/common/Line";
import {
  getMovieDetail,
  getMovieVideo,
  initMovieInfo,
  setLoading,
  setMovieInfo,
  setTabState,
} from "../../api/action";
import { Image } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import YouTube from "react-youtube";

const DetailPage = () => {
  const DetailPageContainer = styled.div`
    /* border: solid 2px red; */
    padding: 0 20px;
    .header {
      font-size: 16px;
      font-weight: 700;
      width: 100%;
    }
    .movie_info_container {
      margin-top: 5px;
      display: flex;
      align-items: flex-end;
      .poster {
        width: 190px;
      }
    }
    .txt_box {
      margin-left: 10px;
      font-size: 13px;
      text {
        margin-left: 10px;
        font-weight: 600;
      }
    }
  `;

  const params = useParams();
  const location = useLocation();
  console.log(location.pathname.indexOf("/movie"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.movieInfo.movieInfo);
  console.log(data, "<data");
  const tabState = useSelector((state: any) => state.tabState);

  const videoOptions = {
    width: "350",
    height: "180",
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      modetbranding: 1,
      title: 0,
    },
  };

  const fetchData = async () => {
    if (params.id) {
      let detailData = await getMovieDetail(params.id);
      await getMovieVideo(params.id).then((res) => {
        console.log(res);
        detailData = { ...detailData, video: res.results[0] };
      });
      dispatch(setMovieInfo({ ...detailData }));
    }
  };

  useEffect(() => {
    fetchData();
    console.log("????rende");
    return () => {
      dispatch(setMovieInfo([]));
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <DetailPageContainer>
      <div className="header">{data.title}</div>
      <div className="movie_info_container">
        <img
          className="poster"
          src={`	https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
          alt={`${data.movieNm} 포스터`}
        />
        <div className="txt_box">
          <ul>
            <li>
              <span>장르</span>
              <text>
                {data?.genres?.map(
                  (v: any, i: number) =>
                    `${v.name}${
                      data.genres.length > 1 && i !== data.genres.length - 1
                        ? ","
                        : ""
                    }`
                )}
              </text>
            </li>
            <li>
              <span>개봉일</span>
              <text>{data.release_date}</text>
            </li>
            <li>
              <span>상영시간</span>
              <text>{data.runtime}분</text>
            </li>
          </ul>
        </div>
      </div>
      <div className="story">
        {data.tagline && (
          <p data-aos="fade-left" data-aos-delay="1000000000">
            {`<<${data.tagline}>>`}
          </p>
        )}
        <p data-aos="fade-left" data-aos-delay="5000000000">
          {data.overview}
        </p>
      </div>
    </DetailPageContainer>
  );
};

export default DetailPage;
