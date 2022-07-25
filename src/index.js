import React from 'react';
import './index.css';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, changePostText} from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} changePostText={changePostText}/>
    );
}

rerender()
subscribe(rerender)
