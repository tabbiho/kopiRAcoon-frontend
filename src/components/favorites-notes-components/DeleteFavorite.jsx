import React, { useContext } from 'react';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';

import {
  Button, AlertDialog, AlertDialogContent, Icon,
  AlertDialogHeader, AlertDialogCloseButton,
  AlertDialogFooter, AlertDialogBody, useDisclosure, AlertDialogOverlay,
} from '@chakra-ui/react';
import AppContext from '../../functions.jsx';

function DeleteFavorite({ coffeeId }) {
  const { BACKEND_URL } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const deleteFavorite = () => {
    const deleteFavoriteEvent = async () => {
      const deletedFavorite = await axios.delete(`${BACKEND_URL}/deleteFavorite/${coffeeId}`);
      console.log(deletedFavorite);
    };
    deleteFavoriteEvent();
    onClose();
    window.location.reload(true);
  };

  return (
    <>
      <Button onClick={onOpen} bg="transparent">
        <Icon id="delete-btn" as={AiOutlineDelete} />
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete your favorite drink? You cannot undo this action
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={deleteFavorite}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default DeleteFavorite;
