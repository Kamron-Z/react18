import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import withRouter from "../../Hook/withRouter";
import withRedirect from "../../Hook/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId || 2
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRedirect,
    withRouter,
)(ProfileContainer)
