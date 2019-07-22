import React from 'react';
import s from './CurrentDialog.module.css'
import Message from "./MessageItem/Message";


const CurrentDialog = () => {
    return (
        <div className={s.DialogArea}>
            <div className={s.NewPost}>

                <textarea></textarea>
                <button>Send</button>
                <button>Attach</button>
            </div>

            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    );
}


export default CurrentDialog;
