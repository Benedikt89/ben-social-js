import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import * as axios from "axios";
import {followUser, setUsers, unFollowUser, setPageNumber, setFetchingStatus} from "../../redux/FriendsReducer";

class FriendsAPI extends React.Component {

    componentDidMount() {
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.setFetchingStatus(false);
            })
    }

    pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    selectPage = (pageNumber) => {
        this.props.setPageNumber(pageNumber);
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items, response.data.totalCount);
                this.props.setFetchingStatus(false);
            })
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

const FriendsContainer = connect(mapStateToProps, {followUser, unFollowUser, setUsers, setPageNumber, setFetchingStatus})(FriendsAPI);

export default FriendsContainer;
