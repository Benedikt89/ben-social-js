import React from 'react';
import style from './Message.module.css'


    const Message = (props) => {


        let messageContent = props.messageContent;
        let avatarImg = props.avatarImage;

        return (

            <div className={style.Message}>
                <div className={style.Avatar}>
                    <img src={avatarImg}/>
                </div>

                <div className={style.MessageArea}>
                    {messageContent}

                </div>

            </div>
        );
    };


export default Message;
