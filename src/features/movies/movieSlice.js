import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import APIKEY from "../../common/apis/movieAPIkey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movietxt = "blood";
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${movietxt}&type=movie`
    );

    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const Seriestxt = "prison";
    const response = await movieApi.get(
      `?apiKey=${APIKEY}&s=${Seriestxt}&type=series`
    );

    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMOvies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
      console.log("fetched movies succefully");
    });
    builder.addCase(fetchAsyncMovies.rejected, (state, action) => {
      state.loading = false;
      state.movies = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchAsyncSeries.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.error = "";
      console.log("fetched shows succefully");
    });
    builder.addCase(fetchAsyncDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedMovieorShow = action.payload;
      state.error = "";
      console.log("fetched details succefully");
    });
  },
});

export const { addMOvies } = movieSlice.actions;
export default movieSlice.reducer;

export const getallMovies = (state) => state.movies.movies;
export const getallShows = (state) => state.movies.shows;
export const getallDetails = (state) => state.movies.selectedMovieorShow;
