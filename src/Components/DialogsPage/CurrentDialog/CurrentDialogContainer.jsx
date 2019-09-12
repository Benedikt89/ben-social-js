import React from 'react';
import {sendMessageActionCreator} from "../../../redux/DialogsReducer";
import CurrentDialog from "./CurrentDialog";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.dialogsReducer.messages
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => {dispatch(sendMessageActionCreator(text));}
    }
};

const CurrentDialogContainer = connect(mapStateToProps, mapDispatchToProps)(CurrentDialog);


export default CurrentDialogContainer;
