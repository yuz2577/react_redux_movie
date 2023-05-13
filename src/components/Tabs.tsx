import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGenreType, setTabState } from "../api/action";
const Tabs = () => {
  const TabsBox = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    select {
      height: 20px;
      border: solid 1px grey;
      font-size: 9px;
      width: 100px;
    }
    img {
      width: 26px;
      height: 26px;
      opacity: 0.6;
      cursor: pointer;
    }
    ul {
      display: flex;
      justify-content: flex-end;
      list-style: none;
      padding: 0;
      width: 100%;
      /* margin: .5rem; */
      li {
        margin-left: 1rem;
        font-size: 14px;
        color: #797979;
        cursor: pointer;
      }
      .on {
        font-weight: 600;
        text-decoration: underline pink 2px;
      }
    }
  `;

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  interface tabProvider {
    name: string;
    id: string;
  }

  const [tabs] = React.useState<tabProvider[]>([
    {
      name: "현재상영영화",
      id: "current",
    },
    {
      name: "영화목록",
      id: "movie",
    },
    {
      name: "배우목록",
      id: "actor",
    },
  ]);

  const { genreList, tabState } = useSelector((state: any) => {
    return {
      genreList: state.genreList.genreList,
      tabState: state.tabState.tabState,
    };
  });

  const handleTabs = (url: string) => {
    navigate(url);
    dispatch(setTabState(url));
  };

  const handleGenre = (data: any) => {
    dispatch(setGenreType(data));
  };
  return (
    <TabsBox>
      {!["/", "/current", "/movie"].includes(location.pathname) && (
        <button onClick={() => navigate(-1)}>
          <img
            src="//icons.veryicon.com/png/o/miscellaneous/eva-fill/arrow-back-11.png"
            alt=""
          />
        </button>
      )}

      {tabState === "movie" && location.pathname === "/movie" && (
        <select>
          {genreList.map((v: any, i: number) => (
            <option onClick={() => handleGenre(v)}>{v.name}</option>
          ))}
        </select>
      )}
      <ul>
        {tabs.map((v, i) => (
          <li
            className={tabState === v.id ? "on" : ""}
            onClick={() => handleTabs(v.id)}
          >
            {v.name}
          </li>
        ))}
      </ul>
    </TabsBox>
  );
};

export default Tabs;
