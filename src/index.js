import React from 'react';
import './index.css';
import store from './redux/redux-store'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
    root.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}/>
    );
}

rerender(store.getState())
store.subscribe(()=> rerender(store.getState()))
