import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/store";


export const render = () => {
    ReactDOM.render(
        <App /*state={store.getState()}*/
             store={store} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
};

render();

store.subscribe( () => {
    let state = store.getState();
    render();
});