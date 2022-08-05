import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {getInitialazed} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import {compose} from "redux";
import withRouter from "./Hook/withRouter";

class App extends Component {
    componentDidMount() {
        this.props.getInitialazed()
    }

    render() {

        if (!this.props.initialazed) {
            return <Preloader/>
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                        <Route path='/profile/' element={<ProfileContainer/>}>
                            <Route path=':userId' element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialazed: state.app.initialazed
})

export default compose(
    connect(mapStateToProps, {getInitialazed}),
    withRouter
)(App)


