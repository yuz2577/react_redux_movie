import { setTabState } from "../api/action";

export type TABSTATE = {
  tabState: string;
};

export type setTabStateAction = ReturnType<typeof setTabState>;
