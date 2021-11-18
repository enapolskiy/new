import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";
import Chat from "./Chat/Chat";


const ChatDesk = (props) => {
    return (
        <div>

            <Chat  dispatch={props.dispatch} newp={props.chatPage.newp} />
            <MyPosts chatPage={props.chatPage.chatMessage} chatMessage={props.chatPage.chatMessage}  />

        </div>
    )
}
export  default ChatDesk;