const SEND_MESSAGE = 'SEND-MESSAGE';

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
    messages: [
        {
            id: 1001,
            userId: 2,
            messageContent: 'Hello bro!',
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
        {
            id: 1002,
            userId: 2,
            messageContent: 'Wats UP!',
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',

        },
        {
            id: 1003,
            userId: 2,
            messageContent: 'asdasf asdf sdfg er adf aefv adfvadv afdvadv adfv !',
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
        },
        {
            id: 1004,
            userId: 1,
            messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
        },
        {
            id: 1005,
            userId: 1,
            messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
        },
        {
            id: 1006,
            userId: 2,
            messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
        },
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1001,
                userId: 1,
                messageContent: action.text,
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            };
            return {
                ...state,
                messages: [newMessage, ...state.messages]
            };
        default :
            return state;
    }
};

export default dialogsReducer;

export const sendMessageActionCreator = (text) =>
    ({type: SEND_MESSAGE, text: text,});