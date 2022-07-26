import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const rerender = () => {
    root.render(
        <Provider store={store}>
            <App />
        </Provider>

);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

rerender()
store.subscribe(()=> rerender())
