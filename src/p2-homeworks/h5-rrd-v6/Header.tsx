import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';


function Header() {
    const [collapsed, setCollapsed] = useState(true)
    const navlinkClass = `${s.navlink}`
    return (
        <div className={s.wrapper}>
                <div className={collapsed ? s.menu : s.menu_active}>
                        <button className={s.menu_btn} onClick={() => {setCollapsed(!collapsed)}}>pages</button>
                    <nav className={s.menu_list}>
                        <NavLink to={'/pre-junior'} className={navlinkClass}>pre-junior </NavLink>
                        <NavLink to={'/junior'} className={navlinkClass}>junior </NavLink>
                        <NavLink to={'/junior+'} className={navlinkClass}>junior+ </NavLink>
                    </nav>
                </div>
        </div>
    )
}

export default Header
