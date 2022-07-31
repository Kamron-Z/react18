import {connect} from "react-redux";
import {follow, setIsFetching, setPage, setTotalPage, setUsers, unFollow} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials:true})
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
                // this.props.setTotalPage(res.data.totalCount)
            })
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials:true})
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           unfollow={this.props.unFollow}
                           follow={this.props.follow}
                           onChangePage={this.onChangePage}
                    />}

            </>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let UsersContainer = connect(mapStateToProps, {
    follow, unFollow,  setUsers, setPage, setTotalPage, setIsFetching
})(UsersApiContainer)

export default UsersContainer