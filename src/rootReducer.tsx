import { combineReducers } from "redux";
import thumbList from "./reducer/mainListReducer";
import movieInfo from "./reducer/movieInfoReducer";
import loadingSet from "./reducer/loadingReducer";
import setThumbList from "./reducer/mainListReducer";
import persistReducer from "redux-persist/lib/persistReducer";
import sessionStorage from "redux-persist/es/storage/session";

export interface persistData {
  key: string;
  sessionStorage: any;
  storage: any;
}

const persistConfig: persistData = {
  key: "data",
  sessionStorage,
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  thumbList: thumbList,
  movieInfo: movieInfo,
  loading: loadingSet,
});
// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
