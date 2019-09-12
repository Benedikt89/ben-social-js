const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            name: 'Vasya',
            id: 1,
            avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
            age: 22,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',
            followed: true,
        },
        {
            name: 'Anya',
            id: 2,
            avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
            age: 33,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',
            followed: true,
        },
        {
            name: 'Tanya',
            id: 3,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            age: 26,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',
            followed: true,
        },
        {
            name: 'Grigory',
            id: 4,
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            age: 43,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',
            followed: true,
        },
    ],
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
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export default friendsReducer;

export const followUserAction = (userId) => ({type: FOLLOW_USER, id: userId});
export const unFollowUserAction = (userId) => ({type: UNFOLLOW_USER, id: userId});
export const setUsersAction = (users) => ({type: SET_USERS, users: users});
