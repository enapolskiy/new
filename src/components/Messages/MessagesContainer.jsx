import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateMessageText} from "../../redux/store";
import {addMessageActionCreator, updateMessageTextActiveCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";
import store from "../../redux/redux-store";
import {connect} from "react-redux";


// <DialogItem />;
// <MessageItem />;

// const MessagesContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let state = store.getState();
//
//             let addMessage = () =>{
//                 store.dispatch(addMessageActionCreator());
//
//
//             }
//             let onMessageChange = (messageText) =>{
//                 let action = updateMessageTextActiveCreator(messageText);
//                 store.dispatch(action);
//             }
//
//            return <Messages addMessage={addMessage}
//                       updateMessageText={onMessageChange}
//                       sendData={state.dialogsPage.sendData}
//                       messageData={state.dialogsPage.messageData}
//                       newm={state.dialogsPage.newm}
//             />
//         }
//         }
//           </StoreContext.Consumer>
//
// }

let mapStateToProps = (state) => {
    return {
        sendData: state.dialogsPage.sendData,
        messageData: state.dialogsPage.messageData,
        newm: state.dialogsPage.newm
    }
}
let mapDispatchToProps = () => {
    return {
        addMessage: () => {
            store.dispatch(addMessageActionCreator());
        },
        updateMessageText: (messageText) => {
            let action = updateMessageTextActiveCreator(messageText);
            store.dispatch(action);
        }
    }
}
const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (Messages);
export default MessagesContainer;