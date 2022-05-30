import React, { useState } from 'react';
import {
  Box, Modal, Button, Textarea, Tooltip, useDisclosure,
  ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';

import axios from 'axios';
import DeleteModal from './DeleteModal.jsx';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';
axios.defaults.withCredentials = true;

function CreateNote({ coffeeId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const CHARACTER_LIMIT = 150;
  const [toggle, setToggle] = useState(true);
  const [notesContent, setNotesContent] = useState('');
  const [postedContent, setPostedContent] = useState('');

  const retrieveNotes = () => {
    const getNotes = async () => {
      const seeNotes = await axios.get(`${BACKEND_URL}/favorites/${coffeeId}`);
      setPostedContent(seeNotes.data.findNote.notes);
      console.log('getting data');
    };
    getNotes();
  };

  const handleOpen = () => {
    onOpen();
    retrieveNotes();
  };

  const handleChangeNotes = (e) => {
    setNotesContent(e.target.value);
  };

  const handleEditedNotes = (e) => {
    setPostedContent(e.target.value);
  };

  const saveNote = () => {
    const coffeeData = {
      coffeeId,
      notes: notesContent,
    };
    const addFavorites = async () => {
      // eslint-disable-next-line no-unused-vars
      const addNotesFav = await axios.post(`${BACKEND_URL}/favorites/addNotes`, coffeeData);
      console.log(addNotesFav.data);
    };
    addFavorites();
    retrieveNotes();
  };

  const toggleInput = () => {
    setToggle(false);
  };

  const saveEditNotes = () => {
    const editedData = {
      coffeeId,
      editedNote: postedContent,
    };
    const editNote = async () => {
      const addNotesFav = await axios.put(`${BACKEND_URL}/favorites/editNote`, editedData);
      console.log(addNotesFav);
    };
    editNote();
    setToggle(true);
  };

  console.log(postedContent);

  return (
    <div>
      <Button onClick={handleOpen}>Create Note</Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} />
          <Box>
            <h2 id="parent-modal-title">Notes:</h2>
            {/* to see posted content */}
            {postedContent
           && (postedContent.length !== 0 && toggle)
            && (
              <>
                <Tooltip title="Double Click to edit" placement="top">
                  <p onDoubleClick={toggleInput}>{postedContent}</p>
                </Tooltip>
                <DeleteModal coffeeId={coffeeId} setPostedContent={setPostedContent} />
              </>
            )}
            {/* if no note is posted, text area available to create new post */}
            {(!postedContent && toggle)
            && (
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '50vh' },
                }}
                noValidate
                autoComplete="off"
              >
                <Textarea
                  id="filled-basic"
                  label="Notes"
                  variant="filled"
                  onChange={handleChangeNotes}
                  value={notesContent}
                  maxLength={CHARACTER_LIMIT}
                />
                <div>
                  `Word Limit: $
                  {notesContent.length}
                  /$
                  {CHARACTER_LIMIT}
                  `
                </div>
                <Button onClick={saveNote}>Save</Button>
              </Box>
            )}
            {/* if want to edit note */}
            { (!toggle && postedContent.length > 0) && (
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '50vh' },
              }}
              noValidate
              autoComplete="off"
            >
              <Textarea
                id="filled-basic"
                label="Notes"
                variant="filled"
                onChange={handleEditedNotes}
                value={postedContent}
                maxLength={CHARACTER_LIMIT}
              />
              <div>
                `Word Limit: $
                {postedContent.length}
                /$
                {CHARACTER_LIMIT}
                `
              </div>
            </Box>
            )}
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={saveEditNotes}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  );
}

export default CreateNote;
