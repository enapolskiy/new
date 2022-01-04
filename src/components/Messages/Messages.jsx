import React from "react";
import style from "./Messages.module.css";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
// import {updateMessageText} from "../../redux/store";
// import {addMessageActionCreator, updateMessageTextActiveCreator} from "../../redux/messages-reducer";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../redux/chat-reducer";

// <DialogItem />;
// <MessageItem />;

const Messages = (props) => {
    let sendElement = props.sendData.map (send =>  <DialogItem name={send.name} id={send.id}/>)
    let messageElement = props.messageData.map (mes => <MessageItem message={mes.message} />)

    let newMessageElement = React.createRef()

    let onAddMessage = () =>{
        props.addMessage();

    }
    let onMessageChange = () =>{
let messageText=newMessageElement.current.value;
        props.updateMessageText(messageText);
    }

    return (
        <div className={style.content}>
            <div className={style.messages}>
                <div className={style.messagesItem}>
                    {sendElement}
                </div>
                <div className={style.messageItem}>
                    {messageElement}
                </div>
            </div>
            <div className={style.messageArea}>
           <div>
               <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newm}/>
           </div>
            <div>
                <button onClick={onAddMessage}>Message</button>
            </div>
            </div>
        </div>
    )
}
export default Messages;