import React from "react";
import classes from "./users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/IMG/castom-avatar.jpg"

class Users extends React.Component{
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div className={classes.usersContent}>
                <button onClick={this.getUsers} className={classes.usersButton}>Get users</button>
                {this.props.users.map(u =><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small : userPhoto } className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?  <button onClick={() => {this.props.unfollow (u.id)}}>Unfollow</button>
                            : <button onClick={() => {this.props.follow (u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        )
    }
}


export default Users;


