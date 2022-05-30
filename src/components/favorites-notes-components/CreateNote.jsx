import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import DeleteModal from './DeleteModal.jsx';

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

function CreateNote({ coffeeId }) {
  const CHARACTER_LIMIT = 150;
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false);
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
    setOpen(true);
    retrieveNotes();
  };
  const handleClose = () => {
    setOpen(false);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
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
                <TextField
                  id="filled-basic"
                  label="Notes"
                  variant="filled"
                  multiline
                  onChange={handleChangeNotes}
                  value={notesContent}
                  helperText={`Word Limit: ${notesContent.length}/${CHARACTER_LIMIT}`}
                  inputProps={{
                    maxLength: CHARACTER_LIMIT,
                  }}
                />
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
            <TextField
              id="filled-basic"
              label="Notes"
              variant="filled"
              multiline
              onChange={handleEditedNotes}
              value={postedContent}
              helperText={`Word Limit: ${postedContent.length}/${CHARACTER_LIMIT}`}
              inputProps={{
                maxLength: CHARACTER_LIMIT,
              }}
            />
            <Button onClick={saveEditNotes}>Save Changes</Button>
          </Box>
          )}

        </Box>
      </Modal>
    </div>
  );
}

export default CreateNote;
