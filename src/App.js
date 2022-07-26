import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

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
                            dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
