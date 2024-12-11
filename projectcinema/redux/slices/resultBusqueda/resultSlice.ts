import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Genre {
    id: number;
    name: string;
}

interface Movie {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
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

interface SearchState {
    result: Movie[];
    loading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    result: [],  
    loading: false,
    error: null,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setResults:(state, action: PayloadAction<[]>)=>{
            state.result = action.payload;
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
    setResults,
    setLoading,
    setError,
} = searchSlice.actions;

export default searchSlice.reducer;