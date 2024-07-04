import axios from 'axios';
// import { store } from '../store/store';

export const axiosInstance = axios.create({
    headers: { 'Content-Type': 'application/json'},
    baseURL: import.meta.env.VITE_RANDOM_USER_API
});