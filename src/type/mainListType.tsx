import { setThumbList } from "../api/action";

export interface thumbItem {
  id: number;
  type: string;
  movieNm: string;
  img: string;
  openDt: string;
  audiAcc: string;
  audiChange: string;
  parsingData: {
    img: string;
  };
}

export type THUMBLIST = {
  currentList: Array<thumbItem>;
};

export type setThumbListAction = ReturnType<typeof setThumbList>;
