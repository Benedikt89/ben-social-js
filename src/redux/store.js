import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import profileReducer from "./ProfileReducer";
import friendsReducer from "./FriendsReducer";
import dialogsReducer from "./DialogsReducer";
import feedReducer from "./FeedReducer";
import authReducer from "./AuthReducer";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    dialogsReducer,
    feedReducer,
    profileReducer,
    friendsReducer,
    authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;