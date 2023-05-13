import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/movieListType";

export const initialState: type.MOVIE_LIST = {
  movieList: [],
};

const currentList = createReducer<type.MOVIE_LIST>(initialState, {
  SET_MOVIE_LIST: (state, action) =>
    produce(state, (draft) => {
      draft.movieList = action.payload;
    }),
});

export default currentList;
