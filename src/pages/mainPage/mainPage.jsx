import React from 'react';
import './mainPage.css'
import {useNavigate} from "react-router-dom";
import ButtonMaterial from "../../components/materialButton/buttonMaterial";

const MainPage = () => {

    const navigate = useNavigate()

    const styles = {
        width:'200px',
        height:'50px',
        color:'#fff',
        border:'1px solid #fff',
        fontWeight:'700'
    }

    function switchRegister  (){
        navigate(`/register`)
    }

    function switchLogin () {
        navigate(`/login`)
    }

    return (
        <div className='main'>
            <ButtonMaterial onClick={switchRegister} style={styles} value='регистрация'/>
            <ButtonMaterial onClick={switchLogin} style={styles} value='авторизация'/>
        </div>
    );
};

export default MainPage;