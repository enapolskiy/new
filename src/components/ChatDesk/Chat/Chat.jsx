import style from "./Chat.module.css"
import React from "react";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../../redux/chat-reducer";

let Chat = (props) =>{

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }
    let onPostChange = () =>{
        let textMessage =newPostElement.current.value;
        props.updateNewMessageText(textMessage)

    }

    return (
        <div className={style.posts}>
            <div>
                <textarea className={style.textareaStyle} ref={newPostElement}
                          onChange={onPostChange} value={props.newp} />
            </div>
            <div>
                <button className={style.buttonStyle} onClick={onAddPost}>Add post</button>
            </div>



        </div>
    )
}

export default Chat;