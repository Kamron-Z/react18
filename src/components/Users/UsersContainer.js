import {connect} from "react-redux";
import {
    follow, followThunk, getUsers,
    setFetchingInProgress,
    setIsFetching,
    setPage,
    setTotalPage,
    setUsers,
    unFollow, unFollowThunk
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {userApi} from "../../api/api";
import withRedirect from "../../Hook/withRedirect";
import {compose} from "redux";

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               users={this.props.users}
                                                               onChangePage={this.onChangePage}
                                                               unFollowThunk={this.props.unFollowThunk}
                                                               followThunk={this.props.followThunk}
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
        fetchingInProgress: state.usersPage.fetchingInProgress,
        isFetching: state.usersPage.isFetching
    }
}

export default compose(
    connect(mapStateToProps, {
        setPage, setTotalPage, setIsFetching,
        getUsers, followThunk, unFollowThunk
    }),
    withRedirect
)(UsersApiContainer)