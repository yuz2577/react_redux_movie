import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Loading = () => {
  const LoadingWrap = styled.div`
    border: solid 2px blue;
    position: absolute;
    z-index: 100;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff71;
  `;

  const data = useSelector((state: any) => state.loading.loading);
  console.log(data);
  return (
    <LoadingWrap>
      <FontAwesomeIcon
        icon={faSpinner}
        className="search"
        fontSize={"5rem"}
        color={"#ffc3da"}
        spin
      />
    </LoadingWrap>
  );
};

export default Loading;
