import React from 'react';
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {addPostActionCreator, postChangeTextActionCreator} from "../../../../redux/FeedReducer";

let mapStateToProps = (state) => {
    return {
        newPostText: state.feedReducer.newPostText,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        onPostChange: (text) => {
        debugger;
            dispatch(postChangeTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};
const NewPostContainer = connect (mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
