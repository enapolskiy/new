import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {updateMessageText} from "../../redux/state";
import {addMessageActionCreator, updateMessageTextActiveCreator} from "../../redux/state";


<DialogItem />;
<MessageItem />;

const Messages = (props) => {
    let sendElement = props.sendData.map (send =>  <DialogItem name={send.name} id={send.id}/>)
    let messageElement = props.dialogsPage.messageData.map (mes => <MessageItem message={mes.message} />)

    let newMessageElement = React.createRef()

    let addMessage = () =>{
        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator());


    }
    let onMessageChange = () =>{
let messageText=newMessageElement.current.value;
        props.dispatch(updateMessageTextActiveCreator(messageText));
    }

    return (
        <div className={classes.content}>
            <div className={classes.messages}>
                <div className={classes.messagesItem}>
                    {sendElement}
                </div>
                <div className={classes.messageItem}>
                    {messageElement}
                </div>
            </div>
            <div className={classes.messageArea}>
           <div>
               <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newm}/>
           </div>
            <div>
                <button onClick={addMessage}>Message</button>
            </div>
            </div>
        </div>
    )
}
export default Messages;