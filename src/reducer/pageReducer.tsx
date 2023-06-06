import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/pageType";

export const initialState: type.PAGE = {
  page: 1,
  active: false,
};

const pageSet = createReducer<type.PAGE, type.setPage>(initialState, {
  SET_PAGE: (state, action) =>
    produce(state, (draft) => {
      draft.page = action.payload;
      draft.active = true;
    }),
});

export default pageSet;
