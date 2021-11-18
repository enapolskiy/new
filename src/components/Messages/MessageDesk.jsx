import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Messages from "./Messages";
import Post from "../ChatDesk/Post/Post";


const MessageDesk = (props) => {
    return (
        <div>


            <Messages dialogsPage={props.dialogsPage}
                      sendData={props.dialogsPage.sendData}
                      messageData={props.messageData}
                      dispatch={props.dispatch}
                      newm={props.dialogsPage.newm}/>
            <DialogItem />
            <MessageItem />

        </div>
    )
}
export  default MessageDesk;