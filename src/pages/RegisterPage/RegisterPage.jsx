import React, { useState } from 'react';
import InputMaterial from "../../components/materialInput/inputMaterial";
import './register.css';
import glassLogo from '../../assets/icons/free-icon-eye-158746.png';
import hide from '../../assets/icons/free-icon-hide-2767146.png';
import CheckBox from "../../components/materialCheckBox/checkBox";
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import { axiosInstance } from "../../Utils/API/api";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/register', data);
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    const styles = {
        width: "300px",
        background: '#224957',
        border: 'none',
        height: '45px',
        borderRadius: '10px'
    };

    const style = {
        width: '300px',
        height: '45px',
        borderRadius: '10px',
        background: '#20DF7F',
        boxShadow: '0px 4px 4px 0px #0000004D',
        color: 'white'
    };

    const [type, setType] = useState('password');
    const [glass, setGlass] = useState(glassLogo);

    const [repeat, setRepeat] = useState('password');
    const [hiding, setHiding] = useState(glassLogo);

    function switchType() {
        setType(prevType => prevType === 'password' ? 'text' : 'password');
        setGlass(prevType => prevType === glassLogo ? hide : glassLogo);
    }

    function switchHide() {
        setRepeat(prevType => prevType === 'password' ? 'text' : 'password');
        setHiding(prevType => prevType === glassLogo ? hide : glassLogo);
    }

    return (
        <div className="register">
            <h1>Зарегистрироваться</h1>
            <p>Зарегистрировайтесь и начните свою работу</p>

            <form onSubmit={handleSubmit(onSubmit)} className='form-reg'>
                <InputMaterial style={styles} label='ФИО' {...register('username', { required: true })} />
                <InputMaterial style={styles} label='Специальность' {...register('speciality', { required: true })} />
                <InputMaterial style={styles} label='Логин' placeholder='Придумайте логин' {...register('login', { required: true })} />
                <div className="password">
                    <InputMaterial style={styles} label='Пароль' placeholder='Придумайте пароль' type={type} {...register('password', { required: true })} />
                    <button type="button" onClick={switchType}><img src={glass} alt=""/></button>
                </div>
                <div className="password">
                    <InputMaterial style={styles} label='Повторите Пароль' type={repeat} {...register('repeatPassword', { required: true })} />
                    <button type="button" onClick={switchHide}><img src={hiding} alt=""/></button>
                </div>
                <div className="remember">
                    <CheckBox id='rem' />
                    <label htmlFor="rem">Запомнить меня</label>
                </div>

                <ButtonMaterial type="submit" value='зарегистрироваться' style={style} />
            </form>
        </div>
    );
};

export default RegisterPage;
