import { setThumbList } from "./api/action";

export type Image = {
  src: string;
};

export interface thumbItem {
  id: number;
  type: string;
  name: string;
  image: string;
  reviews: Array<Object>;
}

export type THUMBLIST = {
  thumbList: Array<thumbItem>;
};

export type setThumbListAction = ReturnType<typeof setThumbList>;
