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

//Hooks
import useModalLogin from '@/hooks/useModalLogin';

//Styles
import loggerStyle from './loggerStyle.module.css'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
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
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
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
                <div className={loggerStyle['welcome-container']}>
                    <h1>Welcome to Quickbet Movies!</h1>
                    <p>Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!</p>
                    <div className={loggerStyle['buttons']}>
                        <button className={loggerStyle['sign-up-btn']}>Sign up</button>
                        <button className={loggerStyle['log-in-btn']}>Log In</button>
                    </div>
                    <button className={loggerStyle['email-register-btn']}>Register with your Email</button>
                    <p className={loggerStyle['support-email']}>For support, contact us at <a href="mailto:support@quickbetdmovies.com">support@quickbetdmovies.com</a></p>
                </div>
                </Box>
            </Modal>
        </>        
    )
}