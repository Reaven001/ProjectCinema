import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//Reducer
import moviesReducer from "./slices/movies/moviesSlice"
import searchReducer  from "./slices/resultBusqueda/resultSlice";
import { movieApi } from "./services/movieApi";


export const store = configureStore ({
  reducer: {
    moviesReducer,
    searchReducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([movieApi.middleware])
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch