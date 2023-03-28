import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTabState } from "../api/action";
const Tabs = () => {
  const TabsBox = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
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
  const tabState = useSelector((state: any) => state.tabState.tabState);
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

  const handleTabs = (url: string) => {
    navigate(url);
    dispatch(setTabState(url));
  };
  return (
    <TabsBox>
      <button onClick={() => navigate(-1)}>
        {location.pathname !== "/" && location.pathname !== "/current" && (
          <img src="//icons.veryicon.com/png/o/miscellaneous/eva-fill/arrow-back-11.png" />
        )}
      </button>
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
