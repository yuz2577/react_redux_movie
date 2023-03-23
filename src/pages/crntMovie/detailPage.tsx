import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import {
    getDetailMovieDT,
    initMovieInfo,
    setMovieInfo,
} from "../../api/action";
import { detailParsing } from "../../carwling";

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
    }
    .txt_box {
        margin-left: 5px;
    }
  `;
    const params = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state: any) => state.movieInfo.movieInfo);
    console.log(data);

    const fetchData = async () => {
        const result = await detailParsing(`영화 ${params.title}`);
        dispatch(setMovieInfo({ ...data, ...result }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DetailPageContainer>
            <div className="header">{data.movieNm}</div>
            <div className="movie_info_container">
                <img src={data.parsingData.img} alt={`${data.movieNm} 포스터`} />
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
                            <text>{data.openDt}</text>
                        </li>
                        <li>
                            <span>관객증감률</span>
                            <text>{data.audiChange}%</text>
                        </li>
                        <li>
                            <span>누적관객수</span>
                            <text>{data.audiAcc}</text>
                        </li>
                    </ul>
                </div>
            </div>
        </DetailPageContainer>
    );
};

export default DetailPage;
