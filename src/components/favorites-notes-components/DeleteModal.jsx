import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function DeleteModal({ coffeeId, setPostedContent }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    const deleteNote = async () => {
      const deletedNote = await axios.put(`${BACKEND_URL}/favorites/deleteNote/${coffeeId}`);
      console.log(deletedNote);
    };
    deleteNote();
    setOpen(false);
    setPostedContent(null);
  };

  return (
    <>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Confirm Delete?</h2>
          <p id="child-modal-description">
            Are you sure? You can&apos;t undo this action afterwards.
          </p>
          <Button onClick={handleClose}>Close </Button>
          <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteModal;
