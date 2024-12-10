import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Apiurl } from "./tmdb_Api/tmdb_API";
import { ACCES_TOKEN } from "@/secret/accesToken";

type Movie = {
    id: number,
    backdrop_path: string,
    genre_ids: Array<number>,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
}

export const movieApi = createApi({
    reducerPath: 'movieAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: Apiurl,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCES_TOKEN}`
        }
    }),
    endpoints: (builder) => ({
        getMoviesNowPlaying: builder.query<Movie[], null>({
            query: () => 'now_playing'
        }),
        getMoviesPopular: builder.query<Movie[], null>({
            query: () => 'popular'
        }),
        getMoviesTopRated: builder.query<Movie[], null>({
            query: () => 'top_rated'
        }),
        getMoviesUpcoming: builder.query<Movie[], null>({
            query: () => 'upcoming'
        }),
    })
})

export const {
    useGetMoviesNowPlayingQuery, 
    useGetMoviesTopRatedQuery,
    useGetMoviesPopularQuery,
    useGetMoviesUpcomingQuery,
} = movieApi
