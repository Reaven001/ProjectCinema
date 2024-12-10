import React, {useState} from "react";

const useModalLogin = () => {
    //Controls Modal
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return {
        handleOpen, 
        handleClose, 
        openModal,
    }
}

export default useModalLogin;