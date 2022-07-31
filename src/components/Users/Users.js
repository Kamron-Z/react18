import classes from "./Users.module.css";
import userPhoto from "../../assest/images/userIcon.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                <div>
                    {pages.map(p => {
                        return <span key={p}
                                     onClick={() => {
                                         props.onChangePage(p)
                                     }}
                                     className={props.currentPage === p ? classes.selectPage : ""}> {p} </span>
                    })}
                </div>
            }
            {props.users.map(u => <div key={u.id}>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} width={80}/>
                    </NavLink>
                    <div>{u.name}</div>
                    {
                        u.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true, headers: {'API-KEY': '1872b366-9534-436e-b8ef-8cb260d3e39e'}
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': '1872b366-9534-436e-b8ef-8cb260d3e39e'}
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })

                            }}>follow</button>
                    }

                </div>
            </div>)
            }
        </div>
    )
}

export default Users