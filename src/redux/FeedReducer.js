import {profileAPI} from "../DAL/api";

const ADD_POST = 'ADD-POST';
const POST_CHANGE_TEXT = 'POST-TEXT-CHANGE';
const SET_PROFILE = 'SET_PROFILE';
const FETCHING_STATUS = 'FETCHING_STATUS';

let initialState = {
    users: [
        {
            name: 'Vasya',
            id: 1,
            avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
        },
        {
            name: 'Anya',
            id: 2,
            avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
        },
        {
            name: 'Tanya',
            id: 3,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
        {
            name: 'Grigory',
            id: 4,
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            age: 43,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',

        },
    ],
    myFeed: [
        {
            id: 9001,
            userId: 3,
            content: 'OMG1111',
            likeCount: 22,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
        {
            id: 9002,
            userId: 4,
            content: 'OMG NOOOOOOOOOO11',
            likeCount: 2,
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
        },
        {
            id: 9003,
            userId: 1,
            content: 'How long, how long will i slide?',
            likeCount: 11,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        }

    ],
    profile: [],
    newPostText: '',
    isFetching: false,
};

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CHANGE_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case ADD_POST:
            let newPost = {
                id: state.myFeed.length + 9001,
                userId: 1,
                content: state.newPostText,
                likeCount: 0,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png'
            };
            return {
                ...state,
                myFeed: [newPost, ...state.myFeed],
                newPostText: ''
            };
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
        default:
            return state;
    }
};

export default feedReducer;

export const addPostActionCreator = () =>
    ({type: ADD_POST});
export const postChangeTextActionCreator = (text) =>
    ({type: POST_CHANGE_TEXT, text: text,});
export const setFetchingStatus = (status) =>
    ({type: FETCHING_STATUS, status: status});
export const _setProfile = (profile) =>
    ({type: SET_PROFILE, profile: profile});

export const setProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then( data => {
            dispatch(_setProfile(data))
        })
};