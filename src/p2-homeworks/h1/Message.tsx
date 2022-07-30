import React from 'react'
import css from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={css.message}>
                <img className={css.messageAvatar} src={props.avatar} alt="Avatar"/>
            <div className={css.messageWindow}>
                <div className={css.messageName}>{props.name}</div>
                <div className={css.messageMessage}>{props.message}</div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
