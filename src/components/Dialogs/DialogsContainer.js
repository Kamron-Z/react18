import {addMessageApi} from "../../redux/dialogs-reducer";
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

export default compose(
    withRedirect,
    connect(mapStateToProps, {addMessageApi}))
(Dialogs);