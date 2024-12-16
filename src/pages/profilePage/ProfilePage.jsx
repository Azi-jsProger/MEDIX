import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './profile.css';
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import StatusToggle from "../../components/StatusToggle/StatusToggle";

const ProfilePage = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(''); // Создание состояния для ошибок

    const style = {
        width: '200px',
        height: '50px',
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!id) {
                console.error("User ID is undefined");
                setError("Ошибка: ID пользователя не определен");
                return;
            }

            const token = localStorage.getItem('token');
            if (!token) {
                console.error("Token not found");
                setError("Не удалось получить данные профиля. Повторите вход.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8888/profile/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Profile fetch error', error);
                setError("Ошибка при загрузке данных профиля. Попробуйте снова.");
            }
        };

        fetchUserData();
    }, [id]);

    if (!userData) return <div>{error || "Loading..."}</div>;

    function switchBack() {
        navigate('/');
    }

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
                        onClick={switchBack}
                    />
                </div>

                <StatusToggle />
            </div>
        </div>
    );
};

export default ProfilePage;


// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import './profile.css';
// import ButtonMaterial from "../../components/materialButton/buttonMaterial";
// import StatusToggle from "../../components/StatusToggle/StatusToggle";
//
// const ProfilePage = () => {
//     const { id } = useParams();
//     const [userData, setUserData] = useState(null);
//
//     const style = {
//         width: '200px',
//         height: '50px',
//     };
//
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const fetchUserData = async () => {
//             if (!id) {
//                 console.error("User ID is undefined");
//                 return;
//             }
//
//             // Получение токена из localStorage
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 console.error("Token not found");
//                 setError("Не удалось получить данные профиля. Повторите вход.");
//                 return;
//             }
//
//             try {
//                 // Запрос с токеном в заголовке Authorization
//                 const response = await axios.get(`http://localhost:8888/profile/${id}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error('Profile fetch error', error);
//                 setError("Ошибка при загрузке данных профиля. Попробуйте снова.");
//             }
//         };
//
//         fetchUserData();
//     }, [id]);
//
//     if (!userData) return <div>{error || "Loading..."}</div>;
//
//
//
//     // useEffect(() => {
//     //     const fetchUserData = async () => {
//     //         if (!id) {
//     //             console.error("User ID is undefined");
//     //             return;
//     //         }
//     //         // Сохраните токен после успешного входа
//     //         if (response.status === 200) {
//     //             const { _id, role, token } = response.data;
//     //             localStorage.setItem('userId', _id);
//     //             localStorage.setItem('userRole', role);
//     //             localStorage.setItem('token', token); // Сохранение токена
//     //         }
//     //
//     //
//     //         // Получение токена из localStorage
//     //         const token = localStorage.getItem('token');
//     //         if (!token) {
//     //             console.error("Token not found");
//     {/*            return;*/}
//     {/*        }*/}
//
//     {/*        try {*/}
//     //             // Запрос с токеном в заголовке Authorization
//     //             const response = await axios.get(`http://localhost:8888/profile/${id}`, {
//     //                 headers: {
//     //                     Authorization: `Bearer ${token}`
//     //                 }
//     //             });
//     //             setUserData(response.data);
//     //         } catch (error) {
//     //             console.error('Profile fetch error', error);
//     //         }
//     //     };
//     //
//     //     fetchUserData();
//     // }, [id]);
//
//     if (!userData) return <div>Loading...</div>;
//
//     function switchBack() {
//         navigate('/');
//     }
//
//     return (
//         <div className='profile'>
//             <div className="user-card">
//                 <h1>Добро Пожаловать!</h1>
//                 <h2>{userData.username}</h2>
//                 <p>Login: {userData.login}</p>
//                 <p>Speciality: {userData.speciality}</p>
//
//                 <div className='form-profile'>
//                     <ButtonMaterial
//                         style={style}
//                         value='Назад'
//                         onClick={switchBack}
//                     />
//                 </div>
//
//                 <StatusToggle />
//             </div>
//         </div>
//     );
// };
//
// export default ProfilePage;
//
//
// // import React, {useEffect, useState} from 'react';
// // import axios from "axios";
// // import {useNavigate, useParams} from "react-router-dom";
// // import './profile.css'
// // import ButtonMaterial from "../../components/materialButton/buttonMaterial";
// // import StatusToggle from "../../components/StatusToggle/StatusToggle";
// //
// // const ProfilePage = () => {
// //     const { id } = useParams();
// //     const [userData, setUserData] = useState(null);
// //
// //     const style = {
// //         width:'200px',
// //         height: '50px',
// //     }
// //
// //     const navigate = useNavigate()
// //
// //     useEffect(() => {
// //         const fetchUserData = async () => {
// //             if (!id) {
// //                 console.error("User ID is undefined");
// //                 return;
// //             }
// //
// //             try {
// //                 const response = await axios.get(`http://localhost:8888/profile/${id}`);
// //                 setUserData(response.data);
// //             } catch (error) {
// //                 console.error('Profile fetch error', error);
// //             }
// //         };
// //
// //         fetchUserData();
// //     }, [id]);
// //
// //     if (!userData) return <div>Loading...</div>;
// //
// //     function switchBack () {
// //         navigate('/')
// //     }
// //
// //     return (
// //         <div className='profile'>
// //             <div className="user-card">
// //                 <h1>Добро Пожаловать!</h1>
// //                 <h2>{userData.username}</h2>
// //                 <p>Login: {userData.login}</p>
// //                 <p>Speciality: {userData.speciality}</p>
// //
// //                 <div className='form-profile'>
// //                     <ButtonMaterial
// //                         style={style}
// //                         value='Назад'
// //                         onClick={switchBack}
// //                     />
// //                 </div>
// //
// //                 <StatusToggle></StatusToggle>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default ProfilePage;