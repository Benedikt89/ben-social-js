import * as axios from "axios";
import {usersAPI} from "../DAL/api";

const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const FETCHING_STATUS = 'FETCHING_STATUS';

let initialState = {
    users: [],
    isFetching: false,
    totalUsersCount: 888,
    pageSize: 22,
    pageNumber: 1,
};

const friendsReducer  = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {...state, users: action.users, totalUsersCount: action.totalCount};
        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber,
            };
        case FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.fetching,
            };
        default:
            return state;
    }
};

export default friendsReducer;

export const _followUser = (userId) => ({type: FOLLOW_USER, id: userId});
export const _unFollowUser = (userId) => ({type: UNFOLLOW_USER, id: userId});
export const _setUsers = (users, totalCount) => ({type: SET_USERS, users: users, totalCount: totalCount});
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber: pageNumber});
export const setFetchingStatus = (fetching) => ({type: FETCHING_STATUS, fetching: fetching});

export const setUsers = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setFetchingStatus(true));
    usersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(_setUsers(data.items, data.totalCount));
            dispatch(setFetchingStatus(false));
        })
};
export const followUser = (userId) => (dispatch) => {
    usersAPI.followUser(userId)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(_followUser(userId));
            }
        })
};
export const unFollowUser = (userId)  => (dispatch) => {
    usersAPI.unfollowUser(userId)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(_unFollowUser(userId));
            }
        })
};