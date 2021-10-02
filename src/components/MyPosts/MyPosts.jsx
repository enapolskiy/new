import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={style.posts}>
            My posts
            <textarea></textarea>
            <button>Add post</button>
            <div>
                New post
            </div>
            <div className={style.posts}>
                <Post message='Hi! how are you?' like='Like 15'/>
                <Post message='Its my first post!' like='Like 12' />

            </div>


        </div>
    )
}
export default MyPosts;