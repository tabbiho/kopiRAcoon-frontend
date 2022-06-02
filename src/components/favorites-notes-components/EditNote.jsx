import React, { useState } from 'react';
import {
  Text, Modal, Button, Textarea, useDisclosure,
  ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, ModalFooter, Icon, HStack,
} from '@chakra-ui/react';
import { AiOutlineEdit } from 'react-icons/ai';

import axios from 'axios';

import DeleteModal from './DeleteModal.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;

function CreateNote({ coffeeId, coffeeName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notesContent, setNotesContent] = useState('');
  const CHARACTER_LIMIT = '50';

  const loadNote = () => {
    const findSpecificNote = async () => {
      const note = await axios.get(`${BACKEND_URL}/favorites/${coffeeId}`);
      console.log(note.data.findNote.notes);
      setNotesContent(note.data.findNote.notes);
    };
    findSpecificNote();
  };

  const handleNoteChange = (e) => {
    console.log(e.target);
    setNotesContent(e.target.value);
  };

  console.log(notesContent);

  const handleOpen = () => {
    onOpen();
    loadNote();
  };

  const saveChanges = () => {
    const coffeeData = {
      coffeeId,
      notes: notesContent,
    };
    const saveNote = async () => {
      const addNotesFav = await axios.put(`${BACKEND_URL}/favorites/editNote`, coffeeData);
      console.log(addNotesFav);
    };
    saveNote();
    setNotesContent('');
    onClose();
    window.location.reload(true);
  };

  return (
    <div>
      <Button id="edit-btn" p={0} bg="transparent" onClick={() => handleOpen()}><Icon ml={2} mt={2} as={AiOutlineEdit} /></Button>
      <Modal isCentered onClose={onClose} size="md" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Notes for
            {' '}
            {coffeeName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={notesContent}
              onChange={handleNoteChange}
              maxLength={CHARACTER_LIMIT}
            />
            <Text>
              {' '}
              Max Number of Characters:
              {' '}
              {notesContent?.length ? notesContent.length : '0'}
              /
              {CHARACTER_LIMIT}
            </Text>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button onClick={saveChanges}>Save Changes</Button>
              <DeleteModal
                coffeeId={coffeeId}
                setNotesContent={setNotesContent}
                onParentModalClose={onClose}
              />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
}

export default CreateNote;
