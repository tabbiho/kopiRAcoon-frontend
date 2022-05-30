import React from 'react';
import {
  useDisclosure,
  Box, Modal, Button,
} from '@chakra-ui/react';

import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;

function DeleteModal({ coffeeId, setPostedContent }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleConfirmDelete = () => {
    const deleteNote = async () => {
      const deletedNote = await axios.put(`${BACKEND_URL}/favorites/deleteNote/${coffeeId}`);
      console.log(deletedNote);
    };
    deleteNote();
    setPostedContent(null);
  };

  return (
    <>
      <Button onClick={onOpen}>Delete</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <Box>
          <h2 id="child-modal-title">Confirm Delete?</h2>
          <p id="child-modal-description">
            Are you sure? You can&apos;t undo this action afterwards.
          </p>
          <Button onClick={onClose}>Close </Button>
          <Button onClick={handleConfirmDelete}>Confirm Delete</Button>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteModal;
