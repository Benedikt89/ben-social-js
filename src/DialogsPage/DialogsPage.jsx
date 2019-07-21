import React from 'react';
import s from './DialogsPage.module.css';
import DialogList from "./DialogsList/DialogList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";


const DialogsPage = () => {
    return (
        <div className={s.DialogPage}>

            <div className={s.Head}>
                <p>Dialogs</p>
              </div>


            <DialogList/>
            <CurrentDialog/>


        </div>
    );
}


export default DialogsPage;
