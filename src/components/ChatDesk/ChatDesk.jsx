import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";
import Chat from "./Chat/Chat";
import ChatContainer from "./Chat/ChatContainer";


const ChatDesk = (props) => {
    return (
        <div>

            <ChatContainer   store = {props.store}
            />
            <MyPosts chatPage={props.chatPage.chatMessage} chatMessage={props.chatPage.chatMessage}  />

        </div>
    )
}
export  default ChatDesk;