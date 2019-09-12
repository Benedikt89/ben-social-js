import React from 'react';
import style from './DialogsPage.module.css';
import DialogList from "./DialogsList/DialogList";
import CurrentDialogContainer from "./CurrentDialog/CurrentDialogContainer";



    const DialogsPage = (props) => {


        return (
            <div className={style.DialogPage}>


                <DialogList users={props.users}/>
                <CurrentDialogContainer
                    store={props.store}/>


            </div>
        );
    }


export default DialogsPage;
