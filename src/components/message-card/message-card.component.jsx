import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './message-card.styles.scss'

const MessageCard = (props) => {

    const currentUser = localStorage.getItem('currentUser');

    return (
        <div className={`message-card ${props.userName === currentUser ? 'message-card__my-message' : 'message-card__friends-message'}`} >

            <div className='message-card__content-container'>
                <Typography variant="body1" component="h2">
                    {props.text}
                </Typography>
            </div>



        </div>

    )
}

export default MessageCard;