import {combineReducers, createStore} from "redux";
import chatReducer from "./chat-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    chatPage: chatReducer,
    dialogsPage: messagesReducer
});

let store = createStore(reducers);

export  default store;