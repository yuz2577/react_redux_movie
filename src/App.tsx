import React, { useEffect } from "react";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Loading from "./components/common/Loading";
import { useSelector } from "react-redux";
import RightContainer from "./components/mainContainer/RightContainer";
import LeftContainer from "./components/mainContainer/LeftContainer";

function App() {
  const Body = styled.body`
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    overflow-x: hidden;
    font-size: 12px;
    * {
      scrollbar-width: auto;
      scrollbar-color: #ffbbbb #ffffff;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 10px;
    }

    *::-webkit-scrollbar-track {
      background: #ffffff;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #ffbbbb;
      border-radius: 10px;
      border: 3px solid #ffffff;
    }
    /* border: solid 2px blue; */
    button {
      background: 0;
      border: none;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
      }
    }
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: url("https://cdn.pet-friends.co.kr/resources/pc/img/background.png");
    background-repeat: no-repeat;
    background-size: cover;

    .movie_list_container {
      > p {
        display: flex;
        justify-content: flex-end;
        margin-top: 0;
      }
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        li {
          cursor: pointer;
          width: 120px;
          /* border: solid 2px blue; */
          border: solid 1px #e6e6e6;
          overflow: hidden;
          height: 250px;
          margin-bottom: 20px;
          .rank {
            position: absolute;
            width: 25px;
            height: 25px;
            background: #bdbdbdbb;
            color: white;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            height: 180px;
          }
          .movie_info_box {
            padding: 5px;
            p {
              font-size: 12px;
              font-weight: 600;
              margin: 0;
              width: 110px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .movie_detail_info {
              margin-top: 3px;
              font-size: 11.5px;
            }
          }
        }
      }
    }
  `;

  return (
    <Body>
      <LeftContainer />
      <RightContainer />
    </Body>
  );
}

export default App;
