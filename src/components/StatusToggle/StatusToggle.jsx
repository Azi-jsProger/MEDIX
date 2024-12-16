import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusToggle = ({ userId, initialStatus }) => {
    const [isOnline, setIsOnline] = useState(initialStatus);

    // Функция для обновления статуса
    const updateStatus = async (status) => {
        try {
            const response = await axios.post('http://localhost:8888/update-status', {
                userId,  // передаем ID пользователя
                isOnline: status  // передаем статус
            });
            setIsOnline(status);  // Обновляем статус в интерфейсе
            console.log('Status updated:', response.data);

            // Отправляем сообщение при смене статуса
            if (status) {
                alert('Доктор на работе');
            } else {
                alert('Доктор не на работе');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    useEffect(() => {
        // Можем сделать так, чтобы проверять статус при загрузке компонента
        setIsOnline(initialStatus);
    }, [initialStatus]);

    return (
        <div>
            <h2>Статус: {isOnline ? 'На работе' : 'Не на работе'}</h2>
            <button onClick={() => updateStatus(true)}>На работе</button>
            <button onClick={() => updateStatus(false)}>Не на работе</button>
        </div>
    );
};

export default StatusToggle;
