"use client"

import { useState } from 'react';


//Material UI
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Button from '@mui/material/Button';

//Hooks
import useModalLogin from '@/hooks/useModalLogin';

//Styles
import loggerStyle from './loggerStyle.module.css'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    bgcolor: "background.paper",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
        fontFamily: "Kumbh Sans",
    },
    ".css-1ualgfl-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
        fontFamily: "Kumbh Sans",
    },
    maxWidth: "100%",
    maxHeight: "100%",
    overflowY: "auto",
    padding: 0,
    display: "flex",
    justifyContent: 'center',
  };

export default function Logger(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const {
        handleOpen: hanldeOpenModal, 
        handleClose: handleCloseModal, 
        openModal,
    } = useModalLogin();

    return(
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={hanldeOpenModal}>
                    <ListItemIcon>
                        <LoginIcon fontSize="small" />
                    </ListItemIcon>
                    Log In
                </MenuItem>
            </Menu>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container className={loggerStyle['login-container']}>
                        <Grid size={{ xs: 12, md: 6 }} className={loggerStyle['container-left']}>
                            <Box sx={{
                                display:'flex',
                                alignItems: 'center',
                                paddingLeft: '1rem'
                            }}>
                                <Button onClick={handleCloseModal} startIcon=   {<ArrowBackIosIcon />}
                                    sx={{
                                        color: '#000000'
                                    }}
                                >
                                    BACK
                                </Button>
                            </Box>
                            <Box className={loggerStyle['buttons']}>
                                <button className={loggerStyle['sign-up-btn']}>Sign up</button>
                                <button className={loggerStyle['log-in-btn']}>Log In</button>
                            </Box>
                            <Box className={loggerStyle['']}>
                                <button className={loggerStyle['sign-up-btn']}>Register with your Email</button>
                            </Box>
                            <Box className={loggerStyle['']}>
                                <Typography variant="body1" component="div" gutterBottom>
                                For any questions, reach out to support@Quickbetdmovies.com
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} className={loggerStyle['container-right']} >
                            <Typography variant="h3" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                                Welcome to Quickbet Movies!
                            </Typography>
                            <Typography variant="body1" component="div" gutterBottom sx={{fontWeight: 'bold'}}>
                                Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!
                            </Typography>
                            <img src="/imagelog1.png" alt="image-login" />
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>        
    )
}