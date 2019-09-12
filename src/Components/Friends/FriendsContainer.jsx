import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {followUserAction, unFollowUserAction} from "../../redux/FriendsReducer";

let mapStateToProps = (state) => {
    return {
        users: state.friendsReducer.users,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {dispatch(followUserAction(userId))},
        unFollowUser: (userId) => {dispatch(unFollowUserAction(userId))}
    }
};


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);



export default FriendsContainer;
