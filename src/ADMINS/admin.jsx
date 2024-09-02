import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from "../Utils/API/api";
import './admin.css';

const Admin = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    // Проверка роли пользователя
    useEffect(() => {
        const role = localStorage.getItem('userRole'); // Предположим, роль пользователя хранится в localStorage
        if (role !== 'admin') {
            navigate('/'); // Перенаправляем на главную страницу, если роль не 'admin'
        }
    }, [navigate]);

    const getUser = async () => {
        try {
            const response = await axiosInstance.get('/users');
            console.log(response);
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className='admins'>
            <h1>Admin</h1>
            <div className="users__card">
                {user.map((item, idx) => (
                    <div className='user-card' key={idx}>
                        <h2>User detail</h2>
                        <h3>{item.username}</h3>
                        <p>Speciality: {item.speciality}</p>
                        <p>Login: {item.login}</p>
                        <p>Password: {item.password}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
