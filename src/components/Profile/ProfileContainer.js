import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileUser} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import withRouter from "../../Hook/withRouter";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setProfileUser(res.data)
            })
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

let withProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileUser})(withProfileContainer) ;