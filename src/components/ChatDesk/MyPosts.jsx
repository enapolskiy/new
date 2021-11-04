import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import Chat from "./Chat/Chat";

const MyPosts = (props) => {
    let postsItem = props.state.chatMessage.map(post => <Post message={post.message} like={post.like}/>)
    return (
        <div className={style.chatItem}>
            <Chat ChatMessage={props.state.chatMessage} addPost={props.addPost} />
            {postsItem}
        </div>


    )
}
export default MyPosts;