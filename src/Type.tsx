import { setThumbList } from "./api/action";

export type Image = {
  src: string;
};

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
  thumbList: Array<thumbItem>;
};

export type setThumbListAction = ReturnType<typeof setThumbList>;
