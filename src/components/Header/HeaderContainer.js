import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {loginOut} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.login
})

export default connect(mapStateToProps, {loginOut})(HeaderContainer);