import { combineReducers } from "redux";
import thumbList from "./reducer";
import setThumbList from "./reducer";

const rootReducer = combineReducers({ thumbList });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
