import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import reducer from "./redux/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);