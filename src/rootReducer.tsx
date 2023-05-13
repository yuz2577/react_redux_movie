import { combineReducers } from "redux";
import currentList from "./reducer/mainListReducer";
import movieInfo from "./reducer/movieInfoReducer";
import loadingSet from "./reducer/loadingReducer";
import setThumbList from "./reducer/mainListReducer";
import persistReducer from "redux-persist/lib/persistReducer";
import sessionStorage from "redux-persist/es/storage/session";
import tabStateSet from "./reducer/tanStateReducer";
import genreListSet from "./reducer/genreReducer";
import movieList from "./reducer/movieListReducer";

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
  currentList: currentList,
  movieList: movieList,
  movieInfo: movieInfo,
  loading: loadingSet,
  tabState: tabStateSet,
  genreList: genreListSet,
});
// export type RootState = ReturnType<typeof rootReducer>;

// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);
