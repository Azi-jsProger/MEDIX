import React, {useState} from 'react';
import InputMaterial from "../../components/materialInput/inputMaterial";
import './register.css';
import glassLogo from '../../assets/icons/free-icon-eye-158746.png';
import hide from '../../assets/icons/free-icon-hide-2767146.png';
import CheckBox from "../../components/materialCheckBox/checkBox";
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import {useNavigate} from "react-router-dom";
import {axiosInstance} from "../../Utils/API/api";

const RegisterPage = () => {


    const [formData, setFormData] = useState({
        username: '',
        password: '',
        speciality: '',
        login: ''
    });

    const navigate = useNavigate()

    const linkChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/register', formData);
            console.log(response.data);
            if (response.status === 201) {
                const userId = response.data._id;
                console.log("User ID:", userId);
                navigate(`/profile/${userId}`);
            }
        } catch (error) {
            console.error('Error registering user', error.response ? error.response.data : error.message);
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


            <form onSubmit={onSubmit} className='form-reg'>

                <InputMaterial
                    id='username-input'
                    style={styles}
                    label='ФИО'
                    name='username'
                    value={formData.username}
                    onChange={linkChange}
                    required
                />

                <InputMaterial
                    id='speciality-input'
                    style={styles}
                    label='Специальность'
                    name='speciality'
                    value={formData.speciality}
                    onChange={linkChange}
                    required
                />

                <InputMaterial
                    id='login-input'
                    style={styles}
                    label='Логин'
                    placeholder='Придумайте логин'
                    name='login'
                    value={formData.login}
                    onChange={linkChange}
                    required
                />

                <div className="password">
                    <InputMaterial
                        id='password-input'
                        style={styles}
                        label='Пароль'
                        name='password'
                        placeholder='Придумайте пароль'
                        type={type}
                        value={formData.password}
                        onChange={linkChange}
                        required
                    />

                    <button type="button" onClick={switchType}><img src={glass} alt=""/></button>
                </div>

                <div className="password">
                    <InputMaterial
                        id='repeat-input'
                        style={styles}
                        placeholder='Повторите пароль'
                        label='Повторите Пароль'
                        type={repeat}
                        name='repeat_password'
                        required
                    />

                    <button type="button" onClick={switchHide}><img src={hiding} alt=""/></button>
                </div>
                <div className="remember">
                    <CheckBox id='rem'/>
                    <label htmlFor="rem">Запомнить меня</label>
                </div>

                <ButtonMaterial type='submit' value='зарегистрироваться' style={style}/>
            </form>
        </div>
    );
};

export default RegisterPage;
