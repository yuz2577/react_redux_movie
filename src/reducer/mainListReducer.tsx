import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/mainListType";

export const initialState: type.THUMBLIST = {
  currentList: [],
};

const currentList = createReducer<type.THUMBLIST, type.setThumbListAction>(
  initialState,
  {
    SET_THUMBLIST: (state, action) =>
      produce(state, (draft) => {
        draft.currentList = action.payload;
      }),
  }
);

export default currentList;
