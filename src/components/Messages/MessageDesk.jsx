import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import Messages from "./Messages";


const MessageDesk = (props) => {
    return (
        <div>
            <DialogItem />
            <MessageItem />
            <Messages dialogsPage={props.dialogsPage}
                      sendData={props.dialogsPage.sendData}
                      messageData={props.messageData}
                      addMessage={props.addMessage}
                      newm={props.dialogsPage.newm}
                      updateMessageText={props.updateMessageText}/>

        </div>
    )
}
export  default MessageDesk;