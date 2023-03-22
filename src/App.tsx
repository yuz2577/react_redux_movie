import React from "react";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import styled from "styled-components";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  const Body = styled.body`
/* ===== Scrollbar CSS ===== */
  /* Firefox */
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: url("https://cdn.pet-friends.co.kr/resources/pc/img/background.png");
    background-repeat: no-repeat;
    background-size: cover;

  `;
  const LeftWrapper = styled.div`
    @media screen and (max-width: 1023px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    width: 22rem;
    padding: 0 4rem;
    /* border: solid 2px red; */
    img {
      width: 20rem;
    }
    .title {
      margin-bottom: 0.5rem;
      font-size: 19px;
      margin-left: 0.5rem;
    }
    input {
      border: 5px solid rgb(110, 226, 255);
      border-radius: 40px;
      padding: 1rem;
    }
    .btn_box {
      margin: 1rem 0;
      button {
        cursor: pointer;
        background: rgb(185, 233, 255);
        color: #52c0ff;
        font-weight: 600;
        border-radius: 30px;
        border: none;
        padding: 0.5rem 1.5rem;
        margin: 0.25rem;
      }
      button:hover {
        background:#52c0ff;
        color: white;
      }
    }
  `;
  const RightWrapper = styled.div`
    /* margin-left: 3rem; */
    overflow-y: scroll;
    height: 100vh;
    width: 420px;
    background: #fafafa;
    padding: 0 10px;
    box-shadow: 0px 0px 80px 20px rgba(0, 0, 0, 0.06);
    position: relative;
    .fixed {
      position:fixed;
      width: 420px;
      background: rgb(250, 250, 250);
      z-index: 10;
    }
    .page {
      margin-top:100px;
    }
  `;

  return (
    <Body>
      <LeftWrapper>
        <p className="title">어떤 영화를 찾으시나요?</p>
        <input placeholder="영화명 혹은 출연진을 검색해보세요." />
        <div className="btn_box">
          <button>코미디</button>
          <button>액션</button>
          <button>로맨스</button>
          <br />
          <button>멜로</button>
          <button>애니메이션</button>
        </div>
        <img
          src="https://tyoudoii-illust.com/wp-content/uploads/2021/02/movie_color-768x457.png"
          alt="영화관람 일러스트"
        />
      </LeftWrapper>
      <RightWrapper>
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
    </Body>
  );
}

export default App;
