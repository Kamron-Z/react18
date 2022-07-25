import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost} from "./redux/state";

export const rerender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage}/>
    );
}

