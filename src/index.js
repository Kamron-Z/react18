import React from 'react';
import './index.css';
import store from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>
    );
}

rerender()
store.subscribe(rerender)
