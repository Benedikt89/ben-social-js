import React from 'react';
import style from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";

const CurrentDialog = (props) => {

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage(text);
        newMessageElement.current.value = '';
    };

    let currentMessages = props.messages.map(unit =>
        <Message messageContent={unit.messageContent}
                 avatarImage={unit.avatarImage}
        />);

    return (
        <div className={style.DialogArea}>
            <div className={style.NewPost}>

                <div className={style.userAvatar}>
                    <img src={props.messages[0].avatarImage} />
                </div>

                <textarea className={style.textArea} ref={newMessageElement}></textarea>
                <div className={style.buttons}>
                    <button onClick={sendMessage} className={style.sendB} >Send</button>
                    <button className={style.attachB}>Attach</button>
                </div>
            </div>

            {currentMessages}

        </div>
    );
};


export default CurrentDialog;
