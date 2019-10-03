import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {followUser, setUsers, unFollowUser, setPageNumber} from "../../redux/FriendsReducer";

class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.setUsers(this.props.pageNumber, this.props.pageSize);
    }

    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    selectPage = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        this.props.setUsers(this.props.pageNumber, this.props.pageSize);
    };

    render() {
        return(
            <Friends
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                followUser={this.props.followUser}
                unFollowUser={this.props.unFollowUser}
                pagesCount={this.pagesCount}
                pageNumber={this.props.pageNumber}
                selectPage={this.selectPage}
                isFetching={this.props.isFetching}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.friendsReducer.users,
        pageSize: state.friendsReducer.pageSize,
        totalUsersCount: state.friendsReducer.totalUsersCount,
        isFetching: state.friendsReducer.isFetching,
        pageNumber: state.friendsReducer.pageNumber,
    }
};

const FriendsContainer = connect(mapStateToProps, {followUser, unFollowUser, setUsers, setPageNumber})(FriendsAPI);

export default FriendsContainer;
