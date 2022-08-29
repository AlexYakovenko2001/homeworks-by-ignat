import React from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <HashRouter>
            <Header/>
            <Pages/>
        </HashRouter>
    )
}

export default HW5
