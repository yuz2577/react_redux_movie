import produce from "immer";
import { createReducer } from "typesafe-actions";
import * as type from "../type/loadingType";

export const initialState: type.LOADING = {
  loading: false,
};

const loadingSet = createReducer<type.LOADING, type.setLoadingAction>(
  initialState,
  {
    SET_LOADING: (state, action) =>
      produce(state, (draft) => {
        draft.loading = action.payload;
      }),
  }
);

export default loadingSet;
