import style from "./Chat.module.css"
import React from "react";


let Chat = (props) =>{

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost (text);
        props.updateNewMessageText('')
    }
    let onPostChange = () =>{
        let textMessage =newPostElement.current.value;
        props.updateNewMessageText(textMessage)

    }

    return (
        <div className={style.posts}>
            <div>
                <textarea className={style.textareaStyle} ref={newPostElement} onChange={onPostChange} value={props.newp} />
            </div>
            <div>
                <button className={style.buttonStyle} onClick={addPost}>Add post</button>
            </div>



        </div>
    )
}

export default Chat;