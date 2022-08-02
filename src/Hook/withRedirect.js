import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
const withRedirect = (Component) => {
    let withComponentRedirect = (props) => {
        if (!props.isAuth) return <Navigate to='/login'/>
        return <Component {...props}/>
    }
    withComponentRedirect = connect(mapStateToProps)(withComponentRedirect)
    return withComponentRedirect
}

export default withRedirect