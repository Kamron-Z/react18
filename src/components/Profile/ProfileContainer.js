import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPostApi, getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import withRouter from "../../Hook/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId || 2
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, addPostApi}),
    // withRedirect,
    withRouter,
)(ProfileContainer)
