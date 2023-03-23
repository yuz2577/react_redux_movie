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
      font-size: 14px;
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
    </DetailPageContainer>
  );
};

export default DetailPage;
