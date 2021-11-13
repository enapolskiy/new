import classes from "../Messages.module.css";

const MessageItem = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export default MessageItem;