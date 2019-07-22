import React from 'react';
import s from './DialogItem.module.css'



const DialogItem = () => {
    return (
        <div className={s.item}>
            <div className={s.Ava}>
                <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
            </div>

            <div className={s.Label}>
                Clara
            </div>

            <div className={s.Preview}>
                Text of message.
            </div>

        </div>

    );
}


export default DialogItem;
