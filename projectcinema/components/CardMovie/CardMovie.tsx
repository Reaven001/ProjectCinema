import React from 'react';

//Material
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

//Components
import RateMovie from '../RateMovie/RateMovie';
import AddFavorite from '../AddFavorite/AddFavorite';

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

interface cardProps { 
    movie: Movie; 
}


const CardMovie: React.FC<cardProps> = ({movie}) => {
    return (
        <Card sx={{ width: 200, maxheight: 335, color:'#262626'}}>
            <CardMedia
                component="img"
                height="223"
                image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt="Paella dish"
            />
            <CardContent sx={{padding: '.5rem'}}>
                <Typography gutterBottom sx={{fontSize: 14 }} component="div">
                    {movie?.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 9 }}>
                    {movie?.release_date}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent: 'center', padding: 0}}>
                <AddFavorite movie={movie} color='#262626'/>
                <RateMovie width={60} height={60} rate={movie?.vote_average}/>
            </CardActions>
        </Card>
    )
}

export default CardMovie;