import {profileAPI} from "../DAL/api";

const SET_PROFILE = 'SET_PROFILE';
const FETCHING_STATUS = 'FETCHING_STATUS';
const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS';
const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';


let initialState = {
    profile: [],
    status: '',
    isFetching: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case FETCHING_STATUS:
            return {
                ...state,
                isFetching: action.status,
            };
        case UPLOAD_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case GET_STATUS_SUCCESS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export default profileReducer;

export const setFetchingStatus = (status) =>
    ({type: FETCHING_STATUS, status: status});
const _setProfile = (profile) =>
    ({type: SET_PROFILE, profile: profile});
const _uploadPhotoSuccess = (photos, userId) =>
    ({type: UPLOAD_PHOTO_SUCCESS, photos, userId});
const _uploadStatus = (status) =>
    ({type: GET_STATUS_SUCCESS, status});

export const setProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then( data => {
            dispatch(_setProfile(data))
        })
};
export const uploadPhoto = (image, userId) => (dispatch) => {
    dispatch(setFetchingStatus(true));
    profileAPI.uploadPhoto(image)
        .then( data => {
            if (data.resultCode === 0) {
                dispatch(_uploadPhotoSuccess(data.photos, userId));
                dispatch(setFetchingStatus(false));
            }
        })
};
export const setStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then( data => {
            dispatch(_uploadStatus(data))
        })
};
