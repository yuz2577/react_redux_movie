import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Loading = () => {
  const LoadingWrap = styled.div`
    @media only screen and (min-width: 421px) {
      width: 420px;
    }
    @media only screen and (max-width: 420px) {
      width: 100vw;
    }
    position: fixed;
    z-index: 100;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff71;
  `;

  const loading = useSelector((state: any) => state.loading.loading);
  console.log(loading);

  console.log(document.getElementsByTagName("body"));

  return loading ? (
    <LoadingWrap>
      <FontAwesomeIcon
        icon={faSpinner}
        className="search"
        fontSize={"5rem"}
        color={"#ffc3da"}
        spin
      />
    </LoadingWrap>
  ) : (
    <span></span>
  );
};

export default Loading;
