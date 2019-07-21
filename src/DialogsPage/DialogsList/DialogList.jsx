import React from 'react';
import s from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";


const DialogList = () => {
    return (

        <div className={s.DialogList}>
            my Dialogs

            <DialogItem/>
            <DialogItem/>
            <DialogItem/>
            <DialogItem/>

        </div>
    );
}


export default DialogList;
