import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const ADD_POST = 'add_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jagmeet';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function addPost(values,callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values);
    request.then(() => callback());
        
    return {
        type: ADD_POST,
        payload: request
    };
}

export function fetchPost(id) {

    const request = axios.get(`${ROOT_URL}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}