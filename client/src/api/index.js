import axios from 'axios';
const url = 'http://localhost:5000/posts';


export const fetchPosts = () => axios.get(url);
export const createPosts = (post) => axios.post(url,post);
export const updatePosts = (post, _id) => axios.patch(url + '/' + _id,post);
export const deletePost = (_id) => axios.delete(url + '/' + _id);
export const likePost = (_id) => axios.patch(url + '/' + _id + '/likePost');
