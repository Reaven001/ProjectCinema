import Link from "next/link";
import Image from "next/image";

//Styles
import navbarStyle from './navbarStyle.module.css';

//Material UI
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

//Components
import Logger from "../Logger";

export default function NavbarDesk() {
    return (
        <Box className={navbarStyle['container-nav']}>
            <Grid sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} container spacing={2}>
                <Image
                    aria-hidden
                    src="/Logo.png"
                    alt="QUICK BET ICON"
                    width={164}
                    height={42}
                />
                <Link href="/">
                    <Typography sx={{ minWidth: 100 }}>Popular</Typography>
                </Link>
                <Link href="/favorites">
                    <Typography sx={{ minWidth: 100 }}>Favorites</Typography>
                </Link>
            </Grid>
            <Logger />  
        </Box>
    )
}