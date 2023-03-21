import React from "react";
import styled from "styled-components";

const Header = () => {
  const HeaderBox = styled.div`
    padding: 10px 0;
    display: flex;
    align-items: center;
    button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 0;
      img {
        width: 20px;
        opacity: 0.5;
        /* padding-top: 2px; */
        transform: translate(0px, 3.5px);
      }
    }
    input {
      margin-left: 10px;
      width: 100%;
      background-color: #f2f2f2;
      border: none;
      height: 25px;
      padding-top: 3px;
      font-size: 12px;
    }
  `;
  return (
    <HeaderBox>
      <button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png?20160819113547"
          alt=""
        />
      </button>
      <input placeholder="  영화명 혹은 출연진을 검색해보세요." />
    </HeaderBox>
  );
};

export default Header;
