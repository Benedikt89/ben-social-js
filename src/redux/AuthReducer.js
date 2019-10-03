import {authAPI} from "../DAL/api";

const AUTH_ME = 'AUTH_ME';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

let initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                isAuth: true,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                id: null,
                email: null,
                login: null,
            };
        default:
            return state;
    }
};

export default authReducer;

const _authMe = (data) => ({type: AUTH_ME, data});
const _logOutSuccess = (data) => ({type: LOG_OUT_SUCCESS});

export const authMe = () => (dispatch) => {
    authAPI.getAuth()
        .then( data => {
            if(data.resultCode === 0) {
                dispatch(_authMe(data.data))
            }
        })
};
export const logOut = () => (dispatch) => {
    authAPI.logOut()
        .then( data => {
            if(data.resultCode === 0) {
                dispatch(_logOutSuccess())
            }
        })
};
export const logIn = (data) => (dispatch) => {
    authAPI.login(data)
        .then( data => {
            if(data.resultCode === 0) {
                authMe();
            }
        })
};