import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withRedirect from "../../Hook/withRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        updateMessage: (text) => {
            dispatch(updateMessageTextAC(text))
        }
    }
}

export default compose(
    withRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs);