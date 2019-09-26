import React from "react";
import FriendsNav from "./FriendsNav";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return{
        users: state.friendsReducer.users,
    }
};
let mapDispatchToProps = (state) => {
    return{

    }
};

const FriendsNavContainer = connect (mapStateToProps, mapDispatchToProps)(FriendsNav);

export default FriendsNavContainer;