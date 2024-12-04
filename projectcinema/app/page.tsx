"use client"

import Link from "next/link";
import Image from "next/image";

//Components
import Banner from "@/components/Banner/Banner";

//Material UI
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//style
import stylePage from './page.module.css';

const movies = [
  { title: 'Kung Fu Panda', slug: 'kungfupanda' },
  { title: 'Shrek', slug: 'shrek' },
  { title: 'Toy Story', slug: 'toystory' },
];

const options = [
  { label: 'Action', id: 1 },
  { label: 'Fiction', id: 2 },
];

export default function Home() {
  return (
    <Box>
      <Banner />
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Box>
              <div>
                <h3>Search</h3>
                <TextField 
                  id="search-movie" 
                  label="Keywords" 
                  variant="filled" 
                />
              </div>
              <div>
                <h3>Genres</h3>
                <Autocomplete
                  disablePortal
                  options={options}
                  renderInput={(params) => <TextField {...params} label="Genres" />}
                />
              </div>
            </Box>
            <Box>
              <Box component="section">
                <h3>Popular</h3>
                <p>Listado de peliculas</p>
                <ul>
                  {movies.map((movie) => (
                    <li key={movie.slug}>
                      <Link href={`/movie/${movie.slug}`}>
                        {movie.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box component="section">
                <h3>Now Paying</h3>
                <p>Listado de peliculas</p>
              </Box>
              <Box component="section">
                <h3>Upcoming</h3>
                <p>Listado de peliculas</p>
              </Box>
              <Box component="section">
                <h3>Top Rated</h3>
                <p>Listado de peliculas</p>
              </Box>
              <Box component="section">
                <h3>Favorites</h3>
                <p>Listado de peliculas</p>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
