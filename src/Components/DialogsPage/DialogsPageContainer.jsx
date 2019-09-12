import React from 'react';
import DialogsPage from "./DialogsPage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.dialogsReducer.users
    }
};
let mapDispatchToProps = () => {
    return {

    }
};

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);


export default DialogsPageContainer;
