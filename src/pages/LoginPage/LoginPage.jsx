import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../Utils/API/api';
import InputMaterial from "../../components/materialInput/inputMaterial";
import CheckBox from "../../components/materialCheckBox/checkBox";
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import glassLogo from "../../assets/icons/free-icon-eye-158746.png";
import hide from '../../assets/icons/free-icon-hide-2767146.png';
import './login.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        password: '',
        login: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const linkChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/login', formData);
            if (response.status === 200) {
                const { _id, role } = response.data;
                localStorage.setItem('userId', _id);
                localStorage.setItem('userRole', role);

                if (role === 'user') {
                    navigate(`/profile/${_id}`);
                } else if (role === 'admin') {
                    navigate(`/admin`);
                } else {
                    setError('Неизвестная роль пользователя.');
                }
            } else {
                setError('Ошибка входа. Неверные данные.');
            }
        } catch (error) {
            setError('Ошибка входа. Проверьте логин и пароль.');
            console.error('Error logging in:', error);
        }
    };

    const [type, setType] = useState('password');
    const [glass, setGlass] = useState(glassLogo);

    const switchType = () => {
        setType(prevType => prevType === 'password' ? 'text' : 'password');
        setGlass(prevGlass => prevGlass === glassLogo ? hide : glassLogo);
    };

    return (
        <div className='login'>
            <h1>Авторизация</h1>
            <p>Авторизуйтесь и начните свою работу</p>

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={onSubmit} className='form-reg'>
                <InputMaterial
                    style={{ width: '300px', height: '45px', background: '#224957', borderRadius: '10px' }}
                    label='Логин'
                    placeholder='Введите ваш логин'
                    name='login'
                    value={formData.login}
                    onChange={linkChange}
                    required
                />
                <div className="password">
                    <InputMaterial
                        style={{ width: '300px', height: '45px', background: '#224957', borderRadius: '10px' }}
                        label='Пароль'
                        name='password'
                        type={type}
                        value={formData.password}
                        onChange={linkChange}
                        required
                    />
                    <button type="button" onClick={switchType}>
                        <img src={glass} alt="Toggle password visibility" />
                    </button>
                </div>
                <div className="rem-btn">
                    <div className="remember">
                        <CheckBox id='rem'/>
                        <label htmlFor="rem">Запомнить меня</label>
                    </div>
                    <a className='forgot' href="#">Забыли пароль?</a>
                </div>
                <ButtonMaterial type='submit' value='Авторизоваться' style={{ width: '300px', height: '45px', background: '#20DF7F', boxShadow: '0px 4px 4px 0px #0000004D', color: 'white', borderRadius: '10px' }}/>
            </form>
        </div>
    );
};

export default LoginPage;
