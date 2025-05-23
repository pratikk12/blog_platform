import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

//User API
export const registerUser = (userData) => API.post('/users/signup', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
export const getAllUsers = () => API.get('/users/all');

//Blog Post API
export const getAllPosts = () => API.get('/posts');
export const getSinglePost = (id) => API.get(`/posts/${id}`);
export const createPost = (postData) => API.post('/posts', postData, {
    withCredentials: true
});

export const updatePost = (id, updatedData) => API.put(`/posts/${id}`, updatedData);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const getUserPosts = () => API.get('/posts/user/myposts');

export default API;
