import React from 'react';
import { TextField,Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

//Hooks
import { useSearchMovie } from '@/hooks/useSearchMovie';

const SearchMovie: React.FC = () => {

    const {
        busqueda,
        setBusqueda,
        buscarPelicula,
    } = useSearchMovie();

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <Typography variant="h5" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
        Search
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        margin="normal"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start">
                <IconButton aria-label="search">
                    <SearchIcon onClick={buscarPelicula}/>
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  );
};

export default SearchMovie;