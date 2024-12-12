//Material
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import FavoriteIcon from '@mui/icons-material/Favorite';


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

interface AddFavoriteProps { 
    movie: Movie;
    color: string; 
}

const AddFavorite: React.FC <AddFavoriteProps> = ({color}) => {
    return (
        <Tooltip title="Add favorite">
            <IconButton sx={{color: color}}>
                <FavoriteBorderIcon />
            </IconButton>
        </Tooltip>
    );
}

export default AddFavorite;