import axios from "axios";


let axiosInstance =axios.create ({baseURL: 'https://jsonplaceholder.typicode.com/users'});
const getUsers = ()=> axiosInstance.get('').then(value=>value);
const getUser = (id)=> axiosInstance.get('/${id}/posts').then(value=>value);
const getUserPost = (id)=> axiosInstance.get('/users' + id + '/comments').then(value=>value);

export {getUsers, getUser, getUserPost}

