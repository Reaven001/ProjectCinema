"use client"

import React, {useEffect} from "react";
import Link from "next/link";
//Components
import Banner from "@/components/Banner/Banner";
import CardMovie from "@/components/CardMovie/CardMovie";
import GenresFilter from "@/components/GenresFilter/GenresFilter";

//Material UI
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

//style
import stylePage from './page.module.css';

//Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { 
  fetchMoviesPopular,
  fetchMoviesNowPlaying, 
  fetchMoviesUpcoming, 
  fetchMoviesTopRated,
} from "@/redux/slices/movies/thunks";

const options = [
  { label: 'Action', id: 1 },
  { label: 'Fiction', id: 2 },
];

interface Movie {
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

interface HomeProps { 
  movie: string[];
}

const Home: React.FC<HomeProps> = ({movie}) => {
  const dispatch = useAppDispatch();

  useEffect(() =>{
    dispatch(fetchMoviesPopular());
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesUpcoming());
    dispatch(fetchMoviesTopRated());
  }, [dispatch]);

  const moviesPopular = useAppSelector(state => state.moviesReducer.moviesPopular);
  const loadingMovies = useAppSelector(state => state.moviesReducer.loading);
  const moviesNowPlaying = useAppSelector(state => state.moviesReducer.moviesNowPlaying);
  const moviesUpcoming = useAppSelector(state => state.moviesReducer.moviesUpcoming);
  const moviesTopRated = useAppSelector(state => state.moviesReducer.moviesTopRated);

  return (
    <Box>
      <Banner />
      <Box sx={{padding: '1rem 3rem'}}>
        <Box>
          <Grid container spacing={4}>
            <Grid size={2}>
              <div>
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Search
                </Typography>
                <TextField 
                  id="search-movie" 
                  label="Keywords" 
                  variant="filled" 
                />
              </div>
              <div>
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Genres
                </Typography>
                <GenresFilter />
              </div>
            </Grid>
            <Grid size={10}>
              <Box component="section">
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Popular
                </Typography>
                {
                  loadingMovies ? (
                    <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                      <CircularProgress />
                    </Box>
                  ):(
                    <ul className={stylePage['movie-list']}>
                      {moviesPopular?.map((movie) => (
                        <li key={movie.id} className={stylePage['movie-card']}>
                          <Link href={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </Box>
              <Box component="section">
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Now PLaying
                </Typography>
                {
                  loadingMovies ? (
                    <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                      <CircularProgress />
                    </Box>
                  ):(
                    <ul className={stylePage['movie-list']}>
                      {moviesNowPlaying?.map((movie) => (
                        <li key={movie.id} className={stylePage['movie-card']}>
                          <Link href={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </Box>
              <Box component="section">
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Upcoming
                </Typography>
                <ul className={stylePage['movie-list']}>
                {
                  loadingMovies ? (
                    <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                      <CircularProgress />
                    </Box>
                  ):(
                    <ul className={stylePage['movie-list']}>
                      {moviesUpcoming?.map((movie) => (
                        <li key={movie.id} className={stylePage['movie-card']}>
                          <Link href={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
                </ul>
              </Box>
              <Box component="section">
                <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                  Top Rated
                </Typography>
                {
                  loadingMovies ? (
                    <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                      <CircularProgress />
                    </Box>
                  ):(
                    <ul className={stylePage['movie-list']}>
                      {moviesTopRated?.map((movie) => (
                        <li key={movie.id} className={stylePage['movie-card']}>
                          <Link href={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
              </Box>
              <Box component="section">
                <h3>Favorites</h3>
                <p>Listado de peliculas</p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;