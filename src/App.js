import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className='main'>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
