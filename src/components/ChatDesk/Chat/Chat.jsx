import style from "./Chat.module.css"



let Chat = (props) =>{
    return (
        <div className={style.posts}>

            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <h3>My posts</h3>


            <div>
                <h3>New post</h3>
            </div>


        </div>
    )
}

export default Chat;