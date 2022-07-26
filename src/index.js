import React from 'react';
import './index.css';
import store , {subscribe} from './redux/state'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <App state={store.getState()}
             changePostText={store.changePostText.bind(store)}
             addNewPost={store.addNewPost.bind(store)}
             addNewMessage={store.addNewMessage.bind(store)}/>
    );
}

rerender()
store.subscribe(rerender)
