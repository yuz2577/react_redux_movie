import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { detailParsing } from "../../carwling";
import Line from "../../components/common/Line";
import {
  initMovieInfo,
  setLoading,
  setMovieInfo,
  setTabState,
} from "../../api/action";

const DetailPage = () => {
  const DetailPageContainer = styled.div`
    /* border: solid 2px red; */
    padding: 0 20px;
    .header {
      font-size: 16px;
      font-weight: 700;
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
    .story {
      margin: 15px 0;
    }
    .member_container {
      .title {
        font-size: 13px;
        font-weight: 600;
      }
      .scrollX {
        overflow-x: scroll;
        display: flex;
      }
      .member_info_box {
        margin-right: 20px;
        img {
          width: 100px;
          border-radius: 10px;
        }
        .member_txt {
          margin-top: 5px;
        }
        .position {
          font-size: 11px;
          color: grey;
          /* border: solid 2px blue; */
          display: inline-block;
          width: 80px;
        }
      }
    }
  `;
  const params = useParams();
  const location = useLocation();
  console.log(location.pathname.indexOf("/movie"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.movieInfo.movieInfo);
  const tabState = useSelector((state: any) => state.tabState);
  console.log(tabState, "<<<<<dat");
  const setting = {
    infinite: false,
    slidesToShow: 3,
    // slidesToScroll: 1,
  };

  const handleUrl = async (data: any, value: any) => {
    navigate(`/movie/${value.movieNm}`);
    dispatch(setTabState("movie"));
  };

  const fetchData = async (title: any) => {
    dispatch(setLoading(true));
    const result = await detailParsing(`영화 ${title}`);
    dispatch(
      setMovieInfo({
        ...data,
        ...result,
        parsingData: { ...data.parsingData, img: result.img },
      })
    );
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData(params.title);
  }, [params.title]);

  useEffect(() => {
    if (location.pathname.indexOf("/movie") < 0) {
      dispatch(setTabState("current"));
    } else {
      dispatch(setTabState("movie"));
    }
  }, [location.pathname]);
  return (
    <DetailPageContainer>
      <div>
        <div className="header">{params.title}</div>
        <div className="movie_info_container">
          <img
            className="poster"
            src={data?.parsingData?.img}
            alt={`${data.movieNm} 포스터`}
          />
          <div className="txt_box">
            <ul>
              <li>
                <span>장르</span>
                <text>{data.genre}</text>
              </li>
              <li>
                <span>국가</span>
                <text>{data.country}</text>
              </li>
              <li>
                <span>개봉</span>
                <text>{data.startDate}</text>
              </li>
              {location.pathname.indexOf("/movie") < 0 && (
                <>
                  <li>
                    <span>관객증감률</span>
                    <text>{data.audiChange}%</text>
                  </li>
                  <li>
                    <span>누적관객수</span>
                    <text>{data.audiAcc}명</text>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="story">{data.story}</div>
      </div>
      <Line />
      <div className="member_container">
        <p className="title">감독/출연진</p>
        <div className="scrollX">
          {/* <Slider {...setting}> */}
          {data?.member?.map((v: any, i: any) => (
            <div className="member_info_box">
              <img src={v.img} />
              <div className="member_txt">
                <span>{v.name}</span>
                <br />
                <span className="position">{v.position}</span>
              </div>
            </div>
          ))}
        </div>
        {/* </Slider> */}
      </div>
      <Line />
      <div className="member_container">
        <p className="title">비슷한 영화를 찾고 있나요?</p>
        {/* <Slider {...setting}> */}
        <div className="scrollX">
          {data?.recommend?.map((v: any, i: any) => (
            <div className="member_info_box" onClick={() => handleUrl(data, v)}>
              <img src={v.img} />
              <div className="member_txt">
                <span>{v.movieNm}</span>
              </div>
            </div>
          ))}
          {/* </Slider> */}
        </div>
      </div>
    </DetailPageContainer>
  );
};

export default DetailPage;
