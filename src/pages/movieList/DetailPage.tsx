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
  `;
  const params = useParams();
  const location = useLocation();
  console.log(location.pathname.indexOf("/movie"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.movieInfo.movieInfo);
  console.log(data, '<data')
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
    }
  };

  const fetchData = async () => {
    if (params.id) {

      let detailData = await getMovieDetail(params.id);
      await getMovieVideo(params.id).then((res) => {
        console.log(res)
        detailData = { ...detailData, video: res.results[0] }
      })
      dispatch(setMovieInfo({ ...detailData }));
    }
  }

  useEffect(() => {
    fetchData();
  }, [params.id])

  return (
    <DetailPageContainer>
      <div className="header">{data.title}</div>
      {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.video.key}`} title={`${data.title} 예고편`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      {data.video &&
        <YouTube videoId={`${data?.video.key}`} opts={videoOptions} />
      }

    </DetailPageContainer >
  );
};

export default DetailPage;
