import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialstate,
  reducers: {
    addMOvies: (state, action) => {
      state.movies = action.payload;
    },
  },
  //   extraReducers: {},
});

export const { addMOvies } = movieSlice.actions;
export default movieSlice.reducer;

export const getallMovies = (state) => state.movies.movies;
