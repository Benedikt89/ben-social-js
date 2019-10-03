import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setFetchingStatus, setProfile} from "../../redux/FeedReducer";


class ProfileContainerAPI extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (userId === undefined) {
            userId = 2
        }
        this.props.setProfile(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.feedReducer.isFetching,
        profile: state.feedReducer.profile,
    }
};

const ProfileContainerRouted = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps, {setProfile, setFetchingStatus})(ProfileContainerRouted);
export default ProfileContainer;
