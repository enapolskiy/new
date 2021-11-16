import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";
import Chat from "./Chat/Chat";


const ChatDesk = (props) => {
    return (
        <div>

            <Chat  addPost={props.addPost} newp={props.chatPage.newp} updateNewMessageText={props.updateNewMessageText} />
            <MyPosts chatPage={props.chatPage.chatMessage} chatMessage={props.chatPage.chatMessage}  />

        </div>
    )
}
export  default ChatDesk;