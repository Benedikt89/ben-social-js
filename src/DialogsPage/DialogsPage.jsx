import React from 'react';
import style from './DialogsPage.module.css';
import DialogList from "./DialogsList/DialogList";
import CurrentDialog from "./CurrentDialog/CurrentDialog";


class DialogsPage extends React.Component {


    render = (props) => {


        return (
            <div className={style.DialogPage}>


                <DialogList Users={this.props.Users}/>
                <CurrentDialog messages={this.props.messages}/>


            </div>
        );
    }
}

export default DialogsPage;
