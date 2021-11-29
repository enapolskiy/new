import style from "./Chat.module.css"
import React from "react";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chat-reducer";
import Chat from "./Chat";

let ChatContainer = (props) =>{
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }
    let onPostChange = (textMessage) =>{
        let action = updateNewMessageTextActionCreator (textMessage)
        props.store.dispatch(action)

    }

    return (
        <Chat addPost={addPost}
              updateNewMessageText={onPostChange}
              message={state.chatPage.message}
              newp={state.chatPage.newp}
        />
    )
}

export default ChatContainer;