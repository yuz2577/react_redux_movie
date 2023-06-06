import { setPage } from "../api/action";

export type PAGE = {
  page: number;
  active: boolean;
};

export type setPage = ReturnType<typeof setPage>;
