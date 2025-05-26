import { configireStore } from "@reduxjs/toolkit";
import apiSlice from ".api/apiSlice";
import userReducer from "./features/userSlice";

const store = configireStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
