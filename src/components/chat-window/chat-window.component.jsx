import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField, InputLabel, Input } from '@material-ui/core';
import './chat-window.styles.scss';
import MessageCard from '../message-card/message-card.component';
import db from '../../firebase';
import firebase from 'firebase';

const ChatWindow = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const [userName, setUserName] = useState('');

    useEffect(() => {
        db.collection("messages").orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
            window.scrollTo(0, document.body.scrollHeight)
        })
    }, [])
    useEffect(() => {
        setUserName(prompt('enter user name'))
    }, [])

    useEffect(() => {
        localStorage.setItem("currentUser", userName);
    }, [userName]);

    const changeInput = (e) => {
        setInput(e.target.value);
    }
    const sendMessage = e => {
        e.preventDefault();
        db.collection('messages').add({
            text: input,
            userName: userName,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    return (
        <div className="chat-window">
            <div className='chat-window__input-header'>
                <form >
                    <TextField id="message-input" label="message" variant="outlined" onChange={changeInput} value={input} />

                    <Button disabled={!input} id="message-send-button" type="submit" variant="contained" color="primary" onClick={sendMessage} >
                        Send
                    </Button>

                </form>

            </div>
            <div className='chat-window__message-box'>


                {messages.map(message => (

                    <MessageCard {...message} key={message.text} />

                ))}
            </div>
        </div>
    )
}

export default ChatWindow;