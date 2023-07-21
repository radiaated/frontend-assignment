import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../features/app/appSlice";

export const store = configureStore({
  reducer: { app: appSlice },
});
