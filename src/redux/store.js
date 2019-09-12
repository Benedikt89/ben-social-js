import {combineReducers, createStore} from "redux";
import feedReducer from "./FeedReducer";
import friendsReducer from "./FriendsReducer";
import dialogsReducer from "./DialogsReducer";


let reducers = combineReducers({
    dialogsReducer,
    feedReducer,
    friendsReducer,
});

let store = createStore(reducers);

export default store;