import React, {useEffect, useState} from "react";

import { Apiurl } from "@/redux/services/tmdb_Api/tmdb_API";
import { ACCES_TOKEN } from "@/secret/accesToken";

import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

//Style
import bannerStyle from './bannerStyle.module.css';

//Components
import RateMovie from "../RateMovie/RateMovie";
import AddFavorite from "../AddFavorite/AddFavorite";

import CircularProgress from '@mui/material/CircularProgress';

interface Movie{
    title: string;
    overview: string;
    vote_average: number;
}

interface BannerProps { 
    movie: Movie | null | undefined; 
}

const Banner: React.FC<BannerProps> = () => {

    const [lastMovie, setLastMovie] = useState({});
    const [errorLastMovie, setErrorLastMovie] = useState('');
    const [loadingLastMovie, setLoadingLastMovie] = useState(false);
    const [urlImageBack, setUrlImageBack] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoadingLastMovie(true);
            try{
                const response = await fetch(`${Apiurl}/912649`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${ACCES_TOKEN}`
                    }
                });
                const data = await response.json();
                setLastMovie(data);
                setUrlImageBack(`https://image.tmdb.org/t/p/original${data?.backdrop_path}`);
                console.log(data);
            } catch (error){
                setErrorLastMovie('Error loading movie');
            }
            finally {
                setLoadingLastMovie(false);
            }
        };
        
        fetchData();
    }, []);

    if (!lastMovie) { return <p>No movie data available.</p>;}

    if (loadingLastMovie) {
        return (
            <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                <CircularProgress />
            </Box>
        )
    }

    return(
        <Box className={bannerStyle['main-banner']}>
            <img src={urlImageBack} alt={lastMovie.title} className={bannerStyle.image}/>
            <Box className={bannerStyle.content}>
                <Container className={bannerStyle['container-content']}>
                    <Grid container sx={{padding: '1rem'}}>
                        <Grid size={10}>
                        <Typography variant="h3" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                            {lastMovie?.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {lastMovie?.overview}
                        </Typography>
                        </Grid>
                        <Grid size={2}  className={bannerStyle.information}>
                            <Box>
                                <AddFavorite movie={lastMovie}/>
                            </Box>
                            <Box>
                                <RateMovie rate={lastMovie.vote_average} width={100} height={100}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default Banner;