import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/tabStateType";

export const initialState: type.TABSTATE = {
  tabState: "current",
};

const tabStateSet = createReducer<type.TABSTATE, type.setTabStateAction>(
  initialState,
  {
    SET_TABSTATE: (state, action) =>
      produce(state, (draft) => {
        draft.tabState = action.payload;
      }),
  }
);

export default tabStateSet;
