import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "./Type";

export const initialState: type.THUMBLIST = {
  thumbList: [],
};

const thumbList = createReducer<type.THUMBLIST, type.setThumbListAction>(
  initialState,
  {
    SET_THUMBLIST: (state, action) =>
      produce(state, (draft) => {
        draft.thumbList = action.payload;
      }),
  }
);

export default thumbList;
