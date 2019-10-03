import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setFetchingStatus, setProfile, setStatus} from "../../redux/ProfileReducer";


class ProfileContainerAPI extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (userId === undefined) {
            userId = 2
        }
        this.props.setProfile(userId);
        this.props.setStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isFetching: state.profileReducer.isFetching,
        profile: state.profileReducer.profile,
        status: state.profileReducer.status,
    }
};

const ProfileContainerRouted = withRouter(ProfileContainerAPI);

const ProfileContainer = connect(mapStateToProps, {setProfile, setFetchingStatus, setStatus})(ProfileContainerRouted);
export default ProfileContainer;
