import React from "react"
import axios from "axios";
import userPhoto from "../../assest/images/userIcon.png"
import classes from "./Users.module.css";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                // this.props.setTotalPage(res.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (<div>
                {
                    <div>
                        {pages.map(p => {
                            return <span
                                onClick={() => {this.onChangePage(p)}}
                                className={this.props.currentPage === p ? classes.selectPage : ""}> {p} </span>
                        })}
                    </div>
                }
                {this.props.users.map(u => <div key={u.id}>
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