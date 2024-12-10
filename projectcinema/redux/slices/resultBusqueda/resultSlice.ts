import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchState {
    result: string[];
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