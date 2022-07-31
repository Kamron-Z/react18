import {connect} from "react-redux";
import {
    follow,
    setFetchingInProgress,
    setIsFetching,
    setPage,
    setTotalPage,
    setUsers,
    unFollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {userApi} from "../../api/api";

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
            // this.props.setTotalPage(res.data.totalCount)
        })
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.setIsFetching(true)
        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               users={this.props.users}
                                                               unfollow={this.props.unFollow}
                                                               follow={this.props.follow}
                                                               onChangePage={this.onChangePage}
                                                               setFetchingInProgress={this.props.setFetchingInProgress}
                                                               fetchingInProgress={this.props.fetchingInProgress}
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
        isFetching: state.usersPage.isFetching,
        fetchingInProgress: state.usersPage.fetchingInProgress
    }
}

let UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setPage, setTotalPage, setIsFetching, setFetchingInProgress
})(UsersApiContainer)

export default UsersContainer