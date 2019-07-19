import React from 'react';
import s from './Navigate.module.css'

const Navigate = () => {
    return (
        <div className={s.Nav}>

            <div className={s.item}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>

            <div className={s.item}>
                <a>News</a>
            </div>

            <div className={s.item}>
                <a>Music</a>
            </div>

            <div className={s.item}>
                <a>Settings</a>
            </div>

        </div>
    );
}


export default Navigate;
