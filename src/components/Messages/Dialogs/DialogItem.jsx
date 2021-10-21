import classes from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = /Messages/ +props.id;
    return (
        <div className={classes.senderMessage}>
            <NavLink to={path} activeClassName={classes.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export  default DialogItem;