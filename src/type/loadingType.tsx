import { setLoading } from "../api/action";

export type LOADING = {
  loading: boolean;
};

export type setLoadingAction = ReturnType<typeof setLoading>;
