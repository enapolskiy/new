import style from "./Chat.module.css"
import React from "react";
import {addPostActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

let Chat = (props) =>{

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())

    }
    let onPostChange = () =>{
        let textMessage =newPostElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(textMessage))

    }

    return (
        <div className={style.posts}>
            <div>
                <textarea className={style.textareaStyle} ref={newPostElement}
                          onChange={onPostChange} value={props.newp} />
            </div>
            <div>
                <button className={style.buttonStyle} onClick={addPost}>Add post</button>
            </div>



        </div>
    )
}

export default Chat;