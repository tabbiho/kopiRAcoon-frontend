import React from 'react';
import {
  useDisclosure, AlertDialog, AlertDialogContent, AlertDialogOverlay,
  AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button,
} from '@chakra-ui/react';

import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;

function DeleteModal({ coffeeId, setNotesContent, onParentModalClose }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const handleConfirmDelete = () => {
    const deleteNote = async () => {
      const deletedNote = await axios.put(`${BACKEND_URL}/favorites/deleteNote/${coffeeId}`);
      console.log(deletedNote);
    };
    deleteNote();
    setNotesContent('');
    onClose();
    onParentModalClose();
    window.location.reload(true);
  };

  return (
    <>
      <Button colorScheme="pink" onClick={onOpen}>Delete</Button>
      <AlertDialog
        size="xs"
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Note?
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can&apos;t undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="pink" onClick={handleConfirmDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default DeleteModal;
