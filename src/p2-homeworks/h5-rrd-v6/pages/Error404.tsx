import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <p>404</p>
            <h2>Look like you're lost</h2>
            <h5>the page you are looking for not available!</h5>
        </div>
    )
}

export default Error404
