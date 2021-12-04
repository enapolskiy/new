import style from "./Chat.module.css"
import React from "react";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chat-reducer";
import Chat from "./Chat";
import StoreContext from "../../../StoreContext";

let ChatContainer = () => {


    return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState();


            let addPost = () => {
                store.dispatch(addPostActionCreator())

            }
            let onPostChange = (textMessage) => {
                let action = updateNewMessageTextActionCreator(textMessage)
                store.dispatch(action)

            }

            return <Chat
                addPost={addPost}
                  updateNewMessageText={onPostChange}
                  chatMessage={state.chatPage.chatMessage}
                  newp={state.chatPage.newp}
            />
        }
        }
    </StoreContext.Consumer>
}

export default ChatContainer;