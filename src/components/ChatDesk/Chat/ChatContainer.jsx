
import React from "react";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chat-reducer";
import Chat from "./Chat";
import {connect} from "react-redux";

// let ChatContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let state = store.getState();
//
//
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator())
//
//             }
//             let onPostChange = (textMessage) => {
//                 let action = updateNewMessageTextActionCreator(textMessage)
//                 store.dispatch(action)
//
//             }
//
//             return <Chat
//                 addPost={addPost}
//                   updateNewMessageText={onPostChange}
//                   chatMessage={state.chatPage.chatMessage}
//                   newp={state.chatPage.newp}
//             />
//         }
//         }
//     </StoreContext.Consumer>
// }
let mapStateToProps = (state) => {
    return {
        chatMessage: state.chatPage.chatMessage,
        newp: state.chatPage.newp
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewMessageText: (textMessage) => {
            let action = updateNewMessageTextActionCreator(textMessage)
            dispatch(action);
        }
    }
}

const ChatContainer = connect (mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;