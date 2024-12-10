import Link from "next/link";
//Material UI
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

//Components 
import CardMovie from "@/components/CardMovie/CardMovie";

import { useAppSelector } from "@/redux/hooks";

//Styles
import resultStyle from './resultStyle.module.css';

const ResultSearch: React.FC = () => {
    const resultados = useAppSelector (state => state.searchReducer.result);

    return (
        <Box>
            <ul  className={resultStyle['movie-list']}>
            {resultados.length > 0 ? (
                resultados.map((pelicula) => (
                    <li key={pelicula.title}>
                        <Link href={`/movie/${pelicula.id}`}>
                            <CardMovie movie={pelicula}/>
                        </Link>
                    </li>
                ))
                ) : (
                <Typography variant="body1" style={{ marginTop: 16 }}>
                    No se encontraron películas.
                </Typography>
            )}
            </ul>
        </Box>
    );
}

export default ResultSearch;