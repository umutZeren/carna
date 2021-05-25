import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension'


import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './App/index';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducer';
import config from './config';
//* thunk added*/

const middleware = [thunk]

//i.st?
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            {}
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
