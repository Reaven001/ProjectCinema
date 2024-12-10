import React, {useEffect, useState} from 'react'

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { setResults } from '@/redux/slices/resultBusqueda/resultSlice';

type Pelicula = {
    id: number;
    title: string;
    genre_ids: string[];
    release_date: number;
};

function useSearchMovie() {
    const dispatch = useAppDispatch();

    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState<Pelicula[]>([]);

    const moviesPopular = useAppSelector(state => state.moviesReducer.moviesPopular);
    const moviesNowPlaying = useAppSelector(state => state.moviesReducer.moviesNowPlaying);
    const moviesUpcoming = useAppSelector(state => state.moviesReducer.moviesUpcoming);
    const moviesTopRated = useAppSelector(state => state.moviesReducer.moviesTopRated);

    const allMovies = [...new Set([...moviesPopular, ...moviesNowPlaying, ...moviesUpcoming, ...moviesTopRated])];

    const buscarPelicula = () => {
        const filtrados = allMovies.filter((pelicula) =>
        pelicula.title.toLowerCase().includes(busqueda.toLowerCase())
        );
        //console.log(filtrados);
        setResultados(filtrados);
        dispatch(setResults(filtrados));
    };

    useEffect(() => {
    }, []);

    return {
        resultados,
        busqueda,
        setBusqueda,
        buscarPelicula,
    }
}

export {useSearchMovie}
