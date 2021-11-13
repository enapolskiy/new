import style from "./MyPosts.module.css";
import Post from "../Post/Post";
import Chat from "../Chat/Chat";

const MyPosts = (props) => {
    let postsItem = props.chatMessage.map(post => <Post message={post.message} like={post.like}/>)
    return (
        <div className={style.chatItem}>
            {postsItem}
        </div>


    )
}
export default MyPosts;