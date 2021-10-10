import style from "./MyPosts.module.css"
import Post from "./Post/Post";

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
        <div className={style.posts}>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={style.posts}>
                {postsItem}
            </div>


        </div>
    )
}
export default MyPosts;