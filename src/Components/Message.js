import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import './Message.css'

function Message({ username, message }) {
    const isUser = username === message.username;
    return (
        <>
            <div className={`message ${isUser && 'message_user'}`}>
                <Card className={isUser? 'user_card':'guest_card'}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            {message.username}
                            : {message.text}

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Message
