import classes from "./Messages.module.css";
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessagesItem/MessagesItem";


<DialogItem />;
<MessageItem />;

const Messages = (props) => {
    let sendElement = props.sendData.map (send =>  <DialogItem name={send.name} id={send.id}/>)
    let messageElement = props.messageData.map (mes => <MessageItem message={mes.message} />)
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
        </div>
    )
}
export default Messages;