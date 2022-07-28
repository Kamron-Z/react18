import React from "react"
import axios from "axios";
import userPhoto from "../../assest/images/userIcon.png"


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (<div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} width={80}/>
                            <div>{u.name}</div>
                            {
                                u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)}>unfollow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>follow</button>
                            }

                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default Users