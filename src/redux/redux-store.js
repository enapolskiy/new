import {combineReducers, createStore} from "redux";
import chatReducer from "./chat-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    chatPage: chatReducer,
    dialogsPage: messagesReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export  default store;