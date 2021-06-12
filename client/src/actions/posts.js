import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload:data});

    } catch (error) {
        console.log(error.message)
    }
    
}

export const createPost = (body) => async(dispatch) => {
    try {
        const {data} = await api.createPosts(body);
        dispatch({ type: 'CREATE', payload:data});

    } catch (error) {
        console.log(error.message)
    }
    
}