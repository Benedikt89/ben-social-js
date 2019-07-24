import React from 'react';
import style from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";


const DialogList = () => {
    return (

        <div className={style.DialogList}>

        <div className={style.Head}>
            <p><b>My Dialogs</b></p>
        </div>

        <ul className={style.DialogUl}>
            <li>
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
        </div>
    );
}


export default DialogList;
