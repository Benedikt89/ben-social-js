import React from 'react';
import style from './DialogList.module.css'
import DialogItem from "./DialogItem/DialogItem";

const DialogList = (props) => {

        let DialogsItems = props.users.map(dialog =>
            <li>
                <DialogItem
                    name={dialog.name}
                    id={dialog.id}
                    avatarImg={dialog.avatarImage}
                />
            </li>)


        return (

            <div className={style.DialogList}>

                <div className={style.Head}>
                    <h3><b>My Dialogs</b></h3>
                </div>

                <ul className={style.DialogUl}>

                    {DialogsItems}

                </ul>
            </div>
        );
    };


export default DialogList;
