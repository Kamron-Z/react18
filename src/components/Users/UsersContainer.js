import {connect} from "react-redux";
import {
    followThunk, requestUsers,
    setIsFetching,
    setPage,
    setTotalPage,
    unFollowThunk
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getFetching,
    getIsFetching,
    getPage,
    getSizeUsersPage,
    getTotalPage,
    getUsers
} from "../../redux/users-reselects";

class UsersApiContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getSizeUsersPage(state),
        totalUsersCount: getTotalPage(state),
        currentPage: getPage(state),
        fetchingInProgress: getFetching(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setPage, setTotalPage, setIsFetching,
        requestUsers, followThunk, unFollowThunk
    })
)(UsersApiContainer)