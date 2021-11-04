import style from "./Chat.module.css"
import React from "react";


let Chat = (props) =>{

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost (text);
        newPostElement.current.value='';
    }
    return (
        <div className={style.posts}>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <h3>My posts</h3>


            <div>
                <h3>New post</h3>
            </div>


        </div>
    )
}

export default Chat;