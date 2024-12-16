import { axiosInstance } from './axiosInstance';

// Регистрация пользователя
export const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/register', userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Ошибка регистрации';
    }
};

// Авторизация пользователя
export const loginUser = async (credentials) => {
    try {
        const response = await axiosInstance.post('/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Ошибка авторизации';
    }
};

// Получение профиля пользователя по ID
export const getUserProfile = async (userId) => {
    try {
        const response = await axiosInstance.get(`/profile/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Ошибка при получении данных профиля';
    }
};

// Получение всех пользователей (для админа)
export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get('/users');
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Ошибка при получении списка пользователей';
    }
};

// Обновление статуса пользователя
export const updateUserStatus = async (userId, isOnline) => {
    try {
        const response = await axiosInstance.post('/update-status', { userId, isOnline });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Ошибка при обновлении статуса';
    }
};
