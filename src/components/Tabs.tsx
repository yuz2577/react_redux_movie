import React, { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getMovieList,
  setGenreType,
  setMovieList,
  setTabState,
} from "../api/action";
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

  const { genreList, tabState, page, genreType } = useSelector((state: any) => {
    return {
      genreList: state.genreList.genreList,
      tabState: state.tabState.tabState,
      page: state.page,
      genreType: state.genreList.genreType,
    };
  });

  const handleTabs = (url: string) => {
    navigate(url);
    dispatch(setTabState(url));
  };

  const handleGenre = async (e: any) => {
    console.log(e.target.value, "<Data genre");
    dispatch(setGenreType({ id: e.target.value, name: "액션" }));

    console.log(e.target.value);
    const res = await getMovieList(page, e.target.value);
    console.log(genreList, "<Resres");

    res.results.map((v: any, i: any) => {
      var genreArr: any = [];
      console.log(v.genre_ids, "<v.genre_ids");
      v?.genre_ids?.map((a: any) =>
        genreList?.map((value: any, index: any) => {
          console.log(a, value.id, "<<<aa");
          if (a === value.id) {
            genreArr.push({ name: value.name, id: value.id });
            v.genre_ids = genreArr;
          }
        })
      );
    });

    console.log(res.results);
    dispatch(setMovieList(res.results));
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
        <select onChange={(e) => handleGenre(e)}>
          {genreList.map((v: any, i: number) => (
            <option onClick={(v) => console.log(v)} value={v.id}>
              {v.name}
            </option>
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
