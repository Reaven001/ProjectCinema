//Material
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//Icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AddFavorite(){
    return (
        <Tooltip title="Add favorite">
            <IconButton sx={{color: '#fff'}}>
                <FavoriteBorderIcon />
            </IconButton>
        </Tooltip>
    );
}