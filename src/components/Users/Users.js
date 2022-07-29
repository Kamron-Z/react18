import classes from "./Users.module.css";
import userPhoto from "../../assest/images/userIcon.png";
import React from "react";

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
                            onClick={() => {props.onChangePage(p)}}
                            className={props.currentPage === p ? classes.selectPage : ""}> {p} </span>
                    })}
                </div>
            }
            {props.users.map(u => <div key={u.id}>
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