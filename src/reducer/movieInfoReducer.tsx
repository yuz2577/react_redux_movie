import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/movieInfoType";

export const initialState: type.MOVIEINFO = {
  movieInfo: [],
};

const movieInfo = createReducer<type.MOVIEINFO, type.setMovieInfoAction>(
  initialState,
  {
    SET_MOVIEINFO: (state, action) =>
      produce(state, (draft) => {
        draft.movieInfo = action.payload;
      }),
    INIT_MOVIEINFO: (state, action) =>
      produce(state, (draft) => {
        draft.movieInfo = [];
      }),
  }
);

export default movieInfo;
