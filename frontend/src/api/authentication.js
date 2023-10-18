import axios from 'axios';
import { HOST } from './config';

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });


export async function login(credentails) {
    console.log(credentails);
    try {
        const response = await axios.post(`${HOST}/login`, credentails);
        if (response.data.auth === 'success'){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('tokenExpiration', Date.now() + 7200000);
            return response.data;
        } else {
            return await Promise.reject('Authentication failed');
        }
    }
    catch (err) {
        console.log(err);
        return await Promise.reject('Login error: ', err);
    }
}

export async function logout() {
    try{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('tokenExpiration');
        return await Promise.resolve('Logged out successfully');
    }catch(err){
        console.log(err);
        return await Promise.reject('Logout error: ', err);
    }
    
}

export async function addUser(newUSer) {
    try {
        const response = await axios.post(`${HOST}/register`, newUSer);
        console.log(response.data);
        console.log(response.headers.get('authorization'));
        return response.data;
    }
    catch (err) {
        console.log(err);
        return await Promise.reject('Failed Add User: ', err);
    }
}

export async function adminLoggedIn() {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (role !== 'admin'){
        console.log('Role is not admin');
        return false;
    }
    else if (!token) {
        console.log('Token does not exist');
        return false;
    }
    else if (Date.now() > tokenExpiration) {
        console.log('Token expired');
        return false;
    }
    return true;
}

export async function superManagerLoggedIn() {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (role !== 'superManager'){
        console.log('Role is not superManager');
        return false;
    }
    else if (!token) {
        console.log('Token does not exist');
        return false;
    }
    else if (Date.now() > tokenExpiration) {
        console.log('Token expired');
        return false;
    }
    return true;
}

export async function orphanManagerLoggedIn() {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (role !== 'orphanManager'){
        console.log('Role is not orphanManager');
        return false;
    }
    else if (!token) {
        console.log('Token does not exist');
        return false;
    }
    else if (Date.now() > tokenExpiration) {
        console.log('Token expired');
        return false;
    }
    return true;
}

export async function userLoggedIn() {
    const role = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    if (role !== 'user'){
        console.log('Role is not user');
        return false;
    }
    else if (!token) {
        console.log('Token does not exist');
        return false;
    }
    else if (Date.now() > tokenExpiration) {
        console.log('Token expired');
        return false;
    }
    return true;
}