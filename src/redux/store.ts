import { configureStore } from "@reduxjs/toolkit";
import tasklistSlice from "./tasklistSlice";

const store = configureStore({
  reducer: {
    tasklist: tasklistSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
