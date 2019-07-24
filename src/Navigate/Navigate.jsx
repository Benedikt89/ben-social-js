import React from 'react';
import style from './Navigate.module.css'
import {NavLink} from "react-router-dom";

const Navigate = () => {
    return (
        <nav className={style.Nav}>

            <div className={style.item}>
                <NavLink to="/Profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/DialogsPage" activeClassName={style.active}>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/News" activeClassName={style.active}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/Music" activeClassName={style.active}>Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/Settings" activeClassName={style.active}>Settings</NavLink>
            </div>

        </nav>
    );
}


export default Navigate;
