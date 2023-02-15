import './index.css';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);