import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

import "./assets/styles/Main.scss";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById("app"));