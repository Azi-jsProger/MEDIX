import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import './profile.css'
import ButtonMaterial from "../../components/materialButton/buttonMaterial";

const ProfilePage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    const style = {
        width:'200px',
        height: '50px',
    }

    const navigate = useNavigate()

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
            <div className="user-card">
                <h1>Добро Пожаловать!</h1>
                <h2>{userData.username}</h2>
                <p>Login: {userData.login}</p>
                <p>Speciality: {userData.speciality}</p>

                <div className='form-profile'>
                    <ButtonMaterial
                        style={style}
                        value='Назад'
                        // onClick={}
                    />
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;