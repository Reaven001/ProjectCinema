"use client"

import Link from "next/link";
import { useState } from "react";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
      <Box>
        <section>
          las mejores peliculas aqui
        </section>
      </Box>
      <Box>
        <Grid container  spacing={4}>
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
    </Box>
  );
}
