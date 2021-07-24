import * as api from '../api';
import { FETCH_ALL, DELETE, UPDATE, LIKEPOST, CREATE } from '../constants/action-type';

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload:data});

    } catch (error) {
        console.log(error.message)
    }
    
}

export const createPost = (body) => async(dispatch) => {
    try {
        const {data} = await api.createPosts(body);
        dispatch({ type: CREATE, payload:data});

    } catch (error) {
        console.log(error.message)
    }
    
}

export const updatePost = (body, _id) => async(dispatch) => {
    try {
        const {data} = await api.updatePosts(body, _id);
        dispatch({ type: UPDATE, payload:data});

    } catch (error) {
        console.log(error.message)
    }
    
}


export const deletePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.deletePost(id);
        dispatch({ type: DELETE, payload:id});

    } catch (error) {
        console.log(error.message)
    }
    
}

export const likePost = (id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({ type: LIKEPOST, payload:data});
    } catch (error) {
        console.log(error.message)
    
    }
}