import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise'

import reducers from './reducers/index';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import PostForm from './components/post_form';
import PostIndex from './components/posts_index';
import PostDetails from './components/post_detail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch> 
                    <Route path='/newpost' component = { PostForm } />
                    <Route path='/post/:id' component = { PostDetails } />
                    <Route path='/' component = { PostIndex } />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

