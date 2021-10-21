import style from "./Chat.module.css"
import MyPosts from "../MyPosts";


let Chat = (props) =>{
return (
    <div className={style.posts}>
        My posts
        <textarea></textarea>
        <button>Add post</button>
        <div>
            New post
        </div>
        <div className={style.posts}>

        </div>

    </div>
)
}

export default Chat;