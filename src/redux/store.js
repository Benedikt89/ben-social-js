import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import feedReducer from "./FeedReducer";
import friendsReducer from "./FriendsReducer";
import dialogsReducer from "./DialogsReducer";


let reducers = combineReducers({
    dialogsReducer,
    feedReducer,
    friendsReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;