import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import db from '../firebase';
import ChatsCard from '../components/chats-card/chats-card.component';
import FlipMove from 'react-flip-move';
import { Button } from '@material-ui/core';
import AddChat from '../components/add-chat/add-chat.component';
const ChatPage = () => {

    const [chats, setChats] = useState([])
    const [userName, setUserName] = useState('');

    // useEffect(() => {
    //     db.collection('chats').onSnapshot(snapShot => {
    //         setChats(snapShot.docs.map(doc => ({ id: doc.id, content: doc.data() })))
    //     })
    // }, [])

    useEffect(() => {
        db.collection('chats').onSnapshot(snapShot => {
            setChats(snapShot.docs.map(doc => ({ id: doc.id, content: doc.data() })))
        })
    }, [])
    useEffect(() => {
        setUserName(prompt('enter user name'))
    }, [])
    useEffect(() => {
        localStorage.setItem('userName', userName)
    }, [userName])

    return (

        <div>

            <FlipMove>
                {
                    chats.map(chat => (
                        <ChatsCard key={chat.id} chatId={chat.id} {...chat.content} />
                    ))
                }
            </FlipMove>

            <div>

                <AddChat />
            </div>



        </div>


    )
}

export default ChatPage;