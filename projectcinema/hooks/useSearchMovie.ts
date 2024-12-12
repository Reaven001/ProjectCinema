import {useEffect, useState} from 'react'

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setResults } from '@/redux/slices/resultBusqueda/resultSlice';

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

function useSearchMovie() {
    const dispatch = useAppDispatch();

    const [busqueda, setBusqueda] = useState('');
    //const [resultados, setResultados] = useState<Pelicula[]>([]);

    const moviesPopular = useAppSelector(state => state.moviesReducer.moviesPopular);
    const moviesNowPlaying = useAppSelector(state => state.moviesReducer.moviesNowPlaying);
    const moviesUpcoming = useAppSelector(state => state.moviesReducer.moviesUpcoming);
    const moviesTopRated = useAppSelector(state => state.moviesReducer.moviesTopRated);

    const allMovies = [...new Set([...moviesPopular, ...moviesNowPlaying, ...moviesUpcoming, ...moviesTopRated])];
    

    const buscarPelicula = () => {
        //console.log(allMovies);
        const lowerCaseName = busqueda.toLowerCase();

        const filtrados = allMovies.filter(movie => movie.title.toLowerCase().includes(lowerCaseName));
        console.log(filtrados);
        //setResultados(filtrados);
        dispatch(setResults(filtrados));
    };

    return {
        //resultados,
        busqueda,
        setBusqueda,
        buscarPelicula,
    }
}

export {useSearchMovie}
