import React from 'react';
import s from './DialogsPage.module.css';
import DialogList from "./DialogsList/DialogList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";


const DialogsPage = () => {
    return (
        <div className={s.DialogPage}>


            <DialogList/>
            <CurrentDialog/>


        </div>
    );
}


export default DialogsPage;
