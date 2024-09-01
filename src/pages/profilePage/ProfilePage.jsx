import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const { id } = useParams();
    console.log("User ID:", id);  // Для отладки

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if (!id) {
                console.error("User ID is undefined");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8888/profile/${id}`);
                setUserData(response.data);
            } catch (error) {
                console.error('Profile fetch error', error);
            }
        };

        fetchUserData();
    }, [id]);

    if (!userData) return <div>Loading...</div>;

    return (
        <div className='profile'>
            <h1>Welcome, {userData.username}</h1>
            <p>Login: {userData.login}</p>
            <p>Speciality: {userData.speciality}</p>
        </div>
    );
};

export default ProfilePage;