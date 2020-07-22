import React from 'react';
import { Popover, Typography, Button, Paper, TextField, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import db from '../../firebase';
import firebase from 'firebase';

const AddChat = () => {
    const [newChatRoom, setNewChatRoom] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const openPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const changeNewChatRoom = e => {
        setNewChatRoom(e.target.value)
    }
    const closePopover = () => {
        setAnchorEl(null);
    };
    const createNewChatRoom = (e) => {
        e.preventDefault();
        closePopover()
        db.collection('chats').add({
            chatRoomName: newChatRoom,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setNewChatRoom('');

    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={openPopover}>
                Add Chat
          </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Paper elevation={3} >
                    <div className='add-chat__input-header'>
                        <form >
                            <TextField autoFocus id="message-input" variant="outlined" onChange={changeNewChatRoom} value={newChatRoom} />

                            <IconButton disabled={!newChatRoom} id="add-chat-buton" type="submit" variant="contained" color="primary" onClick={createNewChatRoom} >
                                <AddCircleIcon style={{ fontSize: 40 }} />
                            </IconButton>

                        </form>

                    </div>
                </Paper>
            </Popover>
        </div>
    );
}

export default AddChat;