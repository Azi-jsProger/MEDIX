import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8888', // URL вашего сервера на Vercel
    headers: {
        'Content-Type': 'application/json'
    }
});
