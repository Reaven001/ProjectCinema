import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
interface MoviesState {
    moviesPopular: Movie[]; 
    moviesNowPlaying: Movie[];
    moviesUpcoming: Movie[];
    moviesTopRated: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: MoviesState = {
    moviesPopular: [],
    moviesNowPlaying: [],
    moviesUpcoming: [],
    moviesTopRated: [],  
    loading: false,
    error: null,
};

export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMoviesPopular:(state, action: PayloadAction<[]>)=>{
            state.moviesPopular = action.payload;
        },
        setMoviesNowPlaying:(state, action: PayloadAction<[]>)=>{
            state.moviesNowPlaying = action.payload;
        },
        setMoviesUpcoming:(state, action: PayloadAction<[]>)=>{
            state.moviesUpcoming = action.payload;
        },
        setMoviesTopRated:(state, action: PayloadAction<[]>)=>{
            state.moviesTopRated = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    }
})

// Action creators are generated for each case reducer function
export const {
    setMoviesPopular,
    setMoviesNowPlaying,
    setMoviesUpcoming,
    setMoviesTopRated,
    setLoading,
    setError,
} = moviesSlice.actions;

export default moviesSlice.reducer;