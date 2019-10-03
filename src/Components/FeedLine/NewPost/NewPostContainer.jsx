import NewPost from "./NewPost";
import {connect} from "react-redux";
import {addPost, postChangeText} from "../../../redux/FeedReducer";

let mapStateToProps = (state) => {
    return {
        newPostText: state.feedReducer.newPostText,
    }
};

const NewPostContainer = connect (mapStateToProps, {addPost, postChangeText})(NewPost);

export default NewPostContainer;
