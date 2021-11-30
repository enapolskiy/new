import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateMessageText} from "../../redux/store";
import {addMessageActionCreator, updateMessageTextActiveCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";


// <DialogItem />;
// <MessageItem />;

const MessagesContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator());


    }
    let onMessageChange = (messageText) =>{
        let action = updateMessageTextActiveCreator(messageText);
        props.store.dispatch(action);
    }

    return (
        <Messages addMessage={addMessage}
                  updateMessageText={onMessageChange}
                  sendData={state.dialogsPage.sendData}
                  messageData={state.dialogsPage.messageData}
                  newm={state.dialogsPage.newm}
        />
    )
}
export default MessagesContainer;