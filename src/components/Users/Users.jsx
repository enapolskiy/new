
import classes from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1pZm5_JEfQ7ZdD84G7jFvOZ4h7uFsyUVoA&usqp=CAU",
                    followed: true,
                    fullName: 'Alexey',
                    status: 'user',
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1pZm5_JEfQ7ZdD84G7jFvOZ4h7uFsyUVoA&usqp=CAU",
                    followed: true,
                    fullName: 'Evgeniy',
                    status: 'admin',
                    location: {city: 'Tomsk', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1pZm5_JEfQ7ZdD84G7jFvOZ4h7uFsyUVoA&usqp=CAU",
                    followed: false,
                    fullName: 'Jaroslav',
                    status: 'user',
                    location: {city: 'Tomsk', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1pZm5_JEfQ7ZdD84G7jFvOZ4h7uFsyUVoA&usqp=CAU",
                    followed: false,
                    fullName: 'Sonya',
                    status: 'user',
                    location: {city: 'Prague', country: 'Czech'}
                }
            ]
        )
    }

    return (
        <div className={classes.usersContent}>
            {props.users.map(u =><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?  <button onClick={() => {props.unfollow (u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.follow (u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}


export default Users;


