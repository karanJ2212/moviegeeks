import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMOvies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  //   extraReducers: {},
});

export const { addMOvies } = movieSlice.actions;
export default movieSlice.reducer;

export const getallMovies = (state) => state.movies.movies;
