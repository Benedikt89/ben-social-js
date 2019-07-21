import React from 'react';
import s from './Message.module.css'


const Message = () => {
    return (
            <div className={s.Message}>
                <div className={s.Avatar}>
                    <img src='https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1'/>
                </div>

                <div className={s.MessageArea}>
                    Hello my Friend.
                </div>

            </div>
    );
}


export default Message;
