import React, { useState, useEffect } from 'react';
import { FormControl, Button, TextField, InputLabel, Input } from '@material-ui/core';
import './chat-window.styles.scss';
import MessageCard from '../message-card/message-card.component';

const ChatWindow = () => {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: 'hello man', userName: 'gmeher1' }

    ])
    const [userName, setUserName] = useState('');

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
        setMessages([...messages, { text: input, userName: userName }])
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

                    <MessageCard {...message} />

                ))}
            </div>
        </div>
    )
}

export default ChatWindow;