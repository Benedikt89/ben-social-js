import React from 'react';
import style from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";

const CurrentDialog = (props) => {

    let currentMessages = props.messages.map(unit =>
        <Message messageContent={unit.messageContent}
                 avatarImage={unit.avatarImage}
        />);

    return (
        <div className={style.DialogArea}>
            <div className={style.NewPost}>

                <textarea></textarea>
                <div>
                    <button>Send</button>
                    <button>Attach</button>
                </div>
            </div>

            {currentMessages}

        </div>
    );
};


export default CurrentDialog;
