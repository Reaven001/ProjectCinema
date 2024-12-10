"use client"
import React, {useEffect, use, useState} from "react";
import { Apiurl } from "@/redux/services/tmdb_Api/tmdb_API";
import { ACCES_TOKEN } from "@/secret/accesToken";
import Link from "next/link";

//Material UI
import Container from '@mui/material/Container';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

//Components
import RateMovie from "@/components/RateMovie/RateMovie";
import CardMovie from "@/components/CardMovie/CardMovie";

//Styles
import pageStyle from './page.module.css';

interface MoviePageProps {
    params: Promise <{slug: string}>
}

const MoviePage: React.FC<MoviePageProps> = ({params}) => {
    const {slug} = use(params);
    const [recommendMovie, setRecomendMovie] = useState([]);
    const [dataMovie, setDataMovie] = useState({});
    const [urlImageBack, setUrlImageBack] = useState('');
    const [urlPoster, setUrlPoster] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(`${Apiurl}${slug}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${ACCES_TOKEN}`
                    }
                });
                const data = await response.json();
                setDataMovie(data);
                setUrlImageBack(`https://image.tmdb.org/t/p/original${data?.backdrop_path}`);
                setUrlPoster(`https://image.tmdb.org/t/p/original${data?.poster_path}`);
                console.log('movie info',data);
                console.log(data);
            } catch (error){
                setError('Error loading movie');
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(`${Apiurl}${slug}/recommendations`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${ACCES_TOKEN}`
                    }
                });
                const data = await response.json();
                setRecomendMovie(data.results);
            } catch (error){
                setError('Error loading movie');
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading</p>
    if (error) return <p>{error}</p>

    return(
        <Box>
            <Box className={pageStyle['main-banner']}>
                <img src={urlImageBack} alt={dataMovie.title} className={pageStyle.image}/>
                <Box className={pageStyle.content}>
                    <Container className={pageStyle['container-content']}>
                        <Box>
                            <img src={urlPoster} alt={dataMovie.title}/>
                        </Box>
                        <Box>
                            <Typography variant="h3" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                                {dataMovie?.title}
                            </Typography>
                            <Typography variant="subtitle1" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                                {dataMovie?.release_date}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {dataMovie?.overview}
                            </Typography>
                            <Box sx={{display: "flex", alignItems: 'center'}}>
                                <RateMovie rate={dataMovie.vote_average} width={100} height={100}/>
                                <Typography variant="h6" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                                Users Score
                                </Typography>
                            </Box>
                            <Box>
                                {dataMovie.genres?.map((genre) => (
                                    <li key={genre.id}>
                                        {genre.name}
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
            <Container component="section">
                <Typography variant="h3" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                    Recommendations
                </Typography>
                {
                  loading ? (
                    <Box sx={{display: 'flex', justifyContent:'center', padding: '3rem'}}>
                      <CircularProgress />
                    </Box>
                  ):(
                    <ul className={pageStyle['movie-list']}>
                      {recommendMovie?.map((movie) => (
                        <li key={movie.id} className={pageStyle['movie-card']}>
                          <Link href={`/movie/${movie.id}`}>
                            <CardMovie movie={movie}/>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                }
            </Container>
        </Box>
    )
}

export default MoviePage;