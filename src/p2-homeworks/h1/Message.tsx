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
            <div>
                <img className={css.messageAvatar} src={props.avatar} alt="Avatar"/>
            </div>
            <div className={css.messageWindow}>
                <div className={css.messageName}>
                    <span>{props.name}</span>
                </div>
                <div>
                    <span>{props.message}</span>
                    <span className={css.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
