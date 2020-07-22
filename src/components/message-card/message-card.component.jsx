import React, { forwardRef } from 'react';
import { Typography } from '@material-ui/core';
import './message-card.styles.scss'

const MessageCard = forwardRef((props, ref) => {

    const currentUser = localStorage.getItem('userName');

    return (
        <div ref={ref} className={`message-card ${props.userName === currentUser ? 'message-card__my-message' : 'message-card__friends-message'}`} >

            <div className='message-card__content-container'>
                <Typography variant="body1" component="h2">
                    {props.text}
                </Typography>
            </div>

        </div>

    )
})

export default MessageCard;