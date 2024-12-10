//Material
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//import FavoriteIcon from '@mui/icons-material/Favorite';

interface Movie{
    id: number;
    title: string;
    overview: string;
    vote_average: number;
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