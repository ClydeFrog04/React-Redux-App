import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import {pokemonReducer} from "./reducers/pokemonReducer";
import "bulma/css/bulma.css";

const store = createStore(pokemonReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);