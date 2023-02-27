import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";

export const store = configureStore({
  reducer: {
    movieReducer,
  },
});
