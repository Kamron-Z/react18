import axios from "axios";
import userPhoto from "../../assest/images/userIcon.png"
const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( res => {
                props.setUsers(res.data.items)
            })

    }
    return (<div>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} width={80}/>
                        <div>{u.name}</div>
                        {
                            u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>follow</button>
                        }

                    </div>
                </div>)
            }
        </div>
    )
}

export default Users