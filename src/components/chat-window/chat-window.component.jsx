import React, { useState, useEffect } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import './chat-window.styles.scss';
import MessageCard from '../message-card/message-card.component';
import db from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

const ChatWindow = ({ match }) => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const [userName, setUserName] = useState('');

    useEffect(() => {
        db.collection("chats").doc(match.params.id).collection('messages').orderBy('timeStamp', 'asc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, content: doc.data() })))
            window.scrollTo(0, document.body.scrollHeight)
        })
    })

    useEffect(() => {
        setUserName(localStorage.getItem('userName') || prompt('enter user name'))
    }, [])

    useEffect(() => {
        localStorage.setItem('userName', userName)
    }, [userName])


    const changeInput = (e) => {
        setInput(e.target.value);
    }
    const sendMessage = e => {
        e.preventDefault();
        db.collection("chats").doc(match.params.id).collection('messages').add({
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
                    <TextField id="message-input" variant="outlined" onChange={changeInput} value={input} />

                    <IconButton disabled={!input} id="message-send-button" type="submit" variant="contained" color="primary" onClick={sendMessage} >
                        <SendIcon style={{ fontSize: 40 }} />
                    </IconButton>

                </form>

            </div>
            <div className='chat-window__message-box'>

                <FlipMove>
                    {messages.map(message => (

                        <MessageCard key={message.id} {...message.content} />

                    ))}
                </FlipMove>
            </div>
        </div>
    )
}

export default ChatWindow;