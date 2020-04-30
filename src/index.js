import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore,applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './store/reducers/index';
// import middleware from './store/middleware';

// const store = createStore(rootReducer, middleware);

const initialState = {};

const middleware = [thunk];
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhances(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
