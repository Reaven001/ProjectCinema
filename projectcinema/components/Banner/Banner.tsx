import Image from "next/image";
import { Box } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

//Style
import bannerStyle from './bannerStyle.module.css'

export default function Banner(){
    return(
        <Grid className={bannerStyle['main-banner']}>
            <Image
                src="/Logo.png"
                alt="Banner Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className={bannerStyle.image}
            />
            <Box className={bannerStyle.content}>
                <Grid className={bannerStyle.information}>
                    <Box>
                        <h1>Titulo de la pelicula</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque error repellendus beatae dolorem eos dicta praesentium, deleniti non, eum cum labore! Corrupti dolorum sit cumque assumenda, voluptate explicabo ut placeat!</p>
                    </Box>
                    <Box>
                        <Box>
                            IconFav
                        </Box>
                        <Box>
                            Rate movie
                        </Box>
                    </Box>

                </Grid>
            </Box>
        </Grid>
    )
}