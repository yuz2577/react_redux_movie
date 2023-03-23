import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Tabs = () => {
  const TabsBox = styled.div`
    display: flex;  
    align-items:center;
    height: 30px;
    padding: 0 10px;
    img {
      width: 26px;
      height: 26px;
      opacity: .6;
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
  const navigate = useNavigate();
  const [tabState, setTabState] = useState(location.pathname);
  interface tabProvider {
    name: string;
    id: string;
  }

  const [tabs] = React.useState<tabProvider[]>([
    {
      name: "현재상영영화",
      id: "/",
    },
    {
      name: "영화목록",
      id: "movieList",
    },
    {
      name: "배우목록",
      id: "actorList",
    },
  ]);

  const handleTabs = (url: any) => {
    setTabState(url);
    navigate(url);
  };
  return (
    <TabsBox>
      <button onClick={() => navigate(-1)}>
        {location.pathname !== "/" &&
          <img src="//icons.veryicon.com/png/o/miscellaneous/eva-fill/arrow-back-11.png" />
        }
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
