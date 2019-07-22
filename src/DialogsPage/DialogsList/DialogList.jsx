import React from 'react';
import s from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";


const DialogList = () => {
    return (

        <ul className={s.DialogList}>
            <li className={s.dialogItem}>
            <DialogItem/>
            </li>

            <li>
                <DialogItem/>
            </li>

            <li>
                <DialogItem/>
            </li>

            <li>
                <DialogItem/>
            </li>

        </ul>
    );
}


export default DialogList;
