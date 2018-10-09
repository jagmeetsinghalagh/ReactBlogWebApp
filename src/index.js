import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise'

import reducers from './reducers/index';
import { BrowserRouter, Route } from 'react-router-dom';
import PostIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path='/' component={ PostIndex } />
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

