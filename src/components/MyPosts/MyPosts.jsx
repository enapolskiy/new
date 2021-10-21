import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import Chat from "./Chat/Chat";

const MyPosts = (props) => {
    let posts = [
        {id:1, message:"Hi! how are you?", likeCount:"likes 12"},
        {id:2, message:"Its my first post!", likeCount:"likes 22"},
        {id:1, message:"Hi! how are you?", likeCount:"likes 12"},
        {id:2, message:"Its my first post!", likeCount:"likes 22"},
        {id:1, message:"Hi! how are you?", likeCount:"likes 12"},
        {id:2, message:"Its my first post!", likeCount:"likes 22"}
    ]
    let postsItem = posts.map (post => <Post message={post.message} like={post.LikeCount}/>)
    return (
        <div>
        <Chat />
            {postsItem}
        </div>


    )
}
export default MyPosts;