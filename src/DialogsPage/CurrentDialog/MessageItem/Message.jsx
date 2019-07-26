import React from 'react';
import s from './Message.module.css'

class Message extends React.Component {

    render = (props) => {

        let messageContent = this.props.messageContent;
        let avatarImg = this.props.avatarImage;

        return (

            <div className={s.Message}>
                <div className={s.Avatar}>
                    <img src={avatarImg}/>
                </div>

                <div className={s.MessageArea}>
                    {messageContent}
                </div>

            </div>
        );
    }
}

export default Message;
