import classes from "./Messages.module.css";
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={classes.content}>
        <div className={classes.messages}>
            <div className={classes.messagesItem}>
                <div className={classes.senderMessage}>
                    <NavLink to="/Messages/1" activeClassName={classes.activeLink}>Sonya</NavLink>
                </div>
                <div className={classes.senderMessage}>
                    <NavLink to="/Messages/2" activeClassName={classes.activeLink}>John</NavLink>
                </div>
                <div className={classes.senderMessage}>
                    <NavLink to="/Messages/3" activeClassName={classes.activeLink}>Mike</NavLink>
                        </div>
                <div className={classes.senderMessage}>
                    <NavLink to="/Messages/4" activeClassName={classes.activeLink}>Vincent</NavLink>
                </div>
            </div>
            <div className={classes.messageItem}>
                <div className={classes.message}>Hi! How are you?</div>
                <div className={classes.message}>Im fine. what about you? </div>
                <div className={classes.message}>Oy! im very glad to see you</div>
                <div className={classes.message}>Cool site!!</div>
            </div>
        </div>
        </div>
    )
}
export  default Messages;