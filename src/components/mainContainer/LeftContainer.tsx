import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const LeftContainer = () => {
  const LeftWrapper = styled.div`
    position: relative;
    @media screen and (max-width: 1023px) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    width: 22rem;
    padding: 0 4rem;
    /* border: solid 2px red; */
    img {
      margin-top: 3rem;
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
        background: #52c0ff;
        color: white;
      }
    }

    @keyframes slide {
      100% {
        left: 3rem;
      }
    }

    iframe {
      -webkit-animation: slide 1s forwards;
      -webkit-animation-delay: 3s;
      animation: slide 1.5s forwards;
      position: absolute;
      left: 53%;
      /* lefT: 25%; */
      top: 16.5rem;
      /* left: -100px;
    width: 100px;
    height: 100px; */
    }
  `;

  const data = useSelector((state: any) => state.movieInfo.movieInfo);

  useEffect(() => {
    AOS.init();
  }, []);

  window.addEventListener("load", function () {
    AOS.refresh();
  });

  return (
    <LeftWrapper>
      {data.video && (
        <iframe
          width="400"
          height="200"
          src={`https://www.youtube.com/embed/${data.video.key}?autoplay=1&mute=1`}
          title={`${data.title} 예고편`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
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
  );
};

export default LeftContainer;
