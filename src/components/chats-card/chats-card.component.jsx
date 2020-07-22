import React, { forwardRef } from 'react';
import { Card, CardActionArea, Typography, CardContent } from '@material-ui/core';
import {
    Link
} from "react-router-dom";
const ChatsCard = forwardRef((props, ref) => {
    return (
        <Link to={`/${props.chatId}`}>
            <Card ref={ref}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.chatRoomName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
})

export default ChatsCard;