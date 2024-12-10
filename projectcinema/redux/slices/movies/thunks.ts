import { Apiurl } from "@/redux/services/tmdb_Api/tmdb_API";
import { ACCES_TOKEN } from "@/secret/accesToken";

import { AppDispatch } from "@/redux/store";
import { 
    setMoviesPopular,
    setMoviesNowPlaying, 
    setMoviesUpcoming, 
    setMoviesTopRated,
    setMoviesFavorites, 
    setLoading, 
    setError, 
} from "./moviesSlice";

export const fetchMoviesPopular = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try{
        const response = await fetch(`${Apiurl}popular`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCES_TOKEN}`
            }
        });
        const data = await response.json();
        dispatch(setMoviesPopular(data.results));
    } catch (error) {
        dispatch(setError("Error fetching popular movies"));
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchMoviesNowPlaying = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try{
        const response = await fetch(`${Apiurl}now_playing`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCES_TOKEN}`
            }
        });
        const data = await response.json();
        dispatch(setMoviesNowPlaying(data.results));
    } catch (error) {
        dispatch(setError("Error fetching popular movies"));
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchMoviesUpcoming = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try{
        const response = await fetch(`${Apiurl}upcoming`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCES_TOKEN}`
            }
        });
        const data = await response.json();
        dispatch(setMoviesUpcoming(data.results));
    } catch (error) {
        dispatch(setError("Error fetching popular movies"));
    } finally {
        dispatch(setLoading(false));
    }
}

export const fetchMoviesTopRated = () => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try{
        const response = await fetch(`${Apiurl}top_rated`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${ACCES_TOKEN}`
            }
        });
        const data = await response.json();
        dispatch(setMoviesTopRated(data.results));
    } catch (error) {
        dispatch(setError("Error fetching popular movies"));
    } finally {
        dispatch(setLoading(false));
    }
}