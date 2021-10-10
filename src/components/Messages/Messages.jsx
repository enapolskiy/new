import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = /Messages/ +props.id;
    return (
        <div className={classes.senderMessage}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Messages = (props) => {
    let sendData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "John"},
        {id: 3, name: "Mike"},
        {id: 4, name: "Vincent"},
        {id: 5, name: "Sonya"},
    ];
    let messageData = [
        {id: 1, message: "Hi! How are you?"},
        {id: 2, message: "Im fine. what about you?"},
        {id: 3, message: "Oy! im very glad to see you"},
        {id: 4, message: "Cool site!!"},
        {id: 5, message: "Cool site eah!!"}
        ]

    let sendElement = sendData.map (send =>  <DialogItem name={send.name} id={send.id}/>)
    let messageElement = messageData.map (mes => <MessageItem message={mes.message} />)
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