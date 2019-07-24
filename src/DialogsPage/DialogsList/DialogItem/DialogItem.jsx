import React from 'react';
import style from './DialogItem.module.css'



const DialogItem = () => {
    return (
        <div className={style.item}>
            <div className={style.Ava}>
                <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
            </div>

            <div className={style.Label}>
                Clara
            </div>

            <div className={style.Preview}>
                Text of message.
            </div>

        </div>

    );
}


export default DialogItem;
