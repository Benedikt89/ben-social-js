import React from 'react';
import Feed from "./Feed";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myFeed: state.feedReducer.myFeed
    }
};

const FeedContainer = connect(mapStateToProps, {})(Feed);

export default FeedContainer;
