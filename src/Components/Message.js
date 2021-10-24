import { Card, CardContent, Typography } from '@mui/material'
import React, { forwardRef } from 'react'
import './Message.css'


const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <>
            <div ref={ref} className={`message ${isUser && 'message_user'}`}>
                <Card className={isUser ? 'user_card' : 'guest_card'}>
                    <CardContent>
                    <Typography
                     className="usernameClass"
                     variant='h6'
                    >
                    {!isUser && `${message.username || 'Unknown User'} `}
                    </Typography>
                        <Typography
                            className="messageClass"
                        >
                            {message.message}

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
})
export default Message
