import React, {useState} from 'react';
import InputMaterial from "../../components/materialInput/inputMaterial";
import CheckBox from "../../components/materialCheckBox/checkBox";
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import glassLogo from "../../assets/icons/free-icon-eye-158746.png";
import hide from '../../assets/icons/free-icon-hide-2767146.png'
import './login.css'

const LoginPage = () => {

    const styles = {
        width: '300px',
        height: '45px',
        background: '#224957',
        borderRadius: '10px'
    }

    const style = {
        width: '300px',
        height: '45px',
        background: '#20DF7F',
        boxShadow: '0px 4px 4px 0px #0000004D',
        color: 'white',
        borderRadius: '10px'
    }

    const [type, setType] = useState('password')
    const [glass, setGlass] = useState(glassLogo)

    function switchType() {
        setType(prevType => prevType === 'password' ? 'text' : 'password');
        setGlass(prevType => prevType === glassLogo ? hide : glassLogo)
    }




    return (
        <div className='login'>
            <h1>Авторизация</h1>
            <p>Авторизуйтесь и начните свою работу</p>

            <form className='form-reg' action="">
                <InputMaterial style={styles} label='Логин' type='text'/>

                <div className="password">
                    <InputMaterial style={styles} label='Пароль' placeholder='Пишите пароль' type={type}/>
                    <button type="button" onClick={switchType}><img src={glass} alt=""/></button>
                </div>

                <div className="rem-btn">
                    <div className="remember">
                        <CheckBox id='rem'/>
                        <label htmlFor="rem">Запомнить меня</label>
                    </div>

                    <a className='forgot' href="">Забыли Пароль?</a>
                </div>


                <ButtonMaterial value='зарегистрироваться' style={style}/>
            </form>


        </div>
    );
};

export default LoginPage;