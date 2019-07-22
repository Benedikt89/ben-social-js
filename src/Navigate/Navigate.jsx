import React from 'react';
import s from './Navigate.module.css'

const Navigate = () => {
    return (
        <nav className={s.Nav}>

            <div className={s.item}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/DialogsPage">Messages</a>
            </div>

            <div className={s.item}>
                <a href="/News">News</a>
            </div>

            <div className={s.item}>
                <a href="/Music">Music</a>
            </div>

            <div className={s.item}>
                <a href="Settings">Settings</a>
            </div>

        </nav>
    );
}


export default Navigate;
