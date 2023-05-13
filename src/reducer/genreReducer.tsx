import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/genreListType";

export const initialState: type.GENRE_LIST = {
  genreList: [],
  genreType: { id: "all", name: "전체" },
};

const genreListSet = createReducer<type.GENRE_LIST>(initialState, {
  SET_GENRE_LIST: (state, action) =>
    produce(state, (draft) => {
      draft.genreList = action.payload;
    }),
  SET_GENRE_TYPE: (state, action) =>
    produce(state, (draft) => {
      draft.genreType = action.payload;
    }),
});

export default genreListSet;
