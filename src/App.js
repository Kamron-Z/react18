import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {changePostText} from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                        <Route path='/profile' element={<Profile
                            state={props.state.profilePage}
                            changePostText={props.changePostText}
                            addNewPost={props.addNewPost}/>}/>
                        <Route path='/dialogs/' element={<Dialogs
                            state={props.state.dialogsPage}
                            addNewMessage={props.addNewMessage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
