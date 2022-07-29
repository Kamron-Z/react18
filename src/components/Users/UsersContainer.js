import {connect} from "react-redux";
import {followAC, isFetchingAC, setPageAC, setTotalPageAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import loading from '../../assest/images/loading.gif'

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
                // this.props.setTotalPage(res.data.totalCount)

            })
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setIsFetching(false)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <img src={loading}/> : <Users totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           unfollow={this.props.unfollow}
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

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unFollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setPage: (pageNum) => dispatch(setPageAC(pageNum)),
        setTotalPage: (totalPage) => dispatch(setTotalPageAC(totalPage)),
        setIsFetching: (isFetching) => dispatch(isFetchingAC(isFetching))
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer)

export default UsersContainer