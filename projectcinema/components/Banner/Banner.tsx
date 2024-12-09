import Image from "next/image";
import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

//Style
import bannerStyle from './bannerStyle.module.css';

//Components
import RateMovie from "../RateMovie/RateMovie";
import AddFavorite from "../AddFavorite/AddFavorite";

export default function Banner(){
    return(
        <Box className={bannerStyle['main-banner']}>
            <Image
                src="/Logo.png"
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className={bannerStyle.image}
            />
            <Box className={bannerStyle.content}>
                <Container className={bannerStyle['container-content']}>
                    <Grid container sx={{padding: '1rem'}}>
                        <Grid size={10}>
                            <h1>Titulo de la pelicula</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque error repellendus beatae dolorem eos dicta praesentium, deleniti non, eum cum labore! Corrupti dolorum sit cumque assumenda, voluptate explicabo ut placeat!</p>
                        </Grid>
                        <Grid size={2}  className={bannerStyle.information}>
                            <Box>
                                <AddFavorite />
                            </Box>
                            <Box>
                                <RateMovie rate={40}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}