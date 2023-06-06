import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { routes } from "../../routes";
import Loading from "../common/Loading";
import Header from "../Header";
import Tabs from "../Tabs";

const RightContainer = () => {
  const RightWrapper = styled.div`
    @media only screen and (min-width: 421px) {
      width: 420px;
    }
    @media only screen and (max-width: 420px) {
      width: 100vw;
    }
    /* margin-left: 3rem; */
    height: 100vh;
    background: white;
    /* padding: 0 10px; */
    box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.06);
    position: relative;
    .fixed {
      height: 10vh;
      box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.06);
      /* border: solid 2px red; */
      position: fixed;
      width: inherit;
      /* width: 100%; */
      background: #fafafa;
      box-shadow: 0px 5px 20px -px rgba(0, 0, 0, 0.068);
      z-index: 10;
    }
    .page {
      padding-top: 10px;
      position: relative;
      height: 92.5vh;
      top: 10vh;
      overflow: scroll;
    }
  `;

  return (
    <RightWrapper>
      <Loading />
      <div className="fixed">
        <Header />
        <Tabs />
      </div>
      <div className="page">
        <Routes>
          {routes.map((value, index) => (
            <Route {...value} />
          ))}
        </Routes>
      </div>
    </RightWrapper>
  );
};

export default RightContainer;
