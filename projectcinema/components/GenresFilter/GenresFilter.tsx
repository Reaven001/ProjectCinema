import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import { ACCES_TOKEN } from '@/secret/accesToken';

export default function BasicSelect() {
  const [errorGenres, setErrorGenres] = useState('');
  const [loadingGenres, setLoadingGenres] = useState(false);

  const [options, setOptions] = useState([]);
  const [genre, setGenre] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };


  useEffect(() => {
    const fetchData = async () => {
        setLoadingGenres(true);
        try{
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${ACCES_TOKEN}`
                }
            });
            const data = await response.json();
            setOptions(data.genres);
            //console.log(data);
        } catch (error){
            setErrorGenres('Error loading genres');
        }
        finally {
            setLoadingGenres(false);
        }
    };
    
    fetchData();
  }, []);

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="select-genre-label">Genre</InputLabel>
        <Select
          labelId="select-genre-label"
          id="select-genre"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          {
            options?.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>{genre.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}