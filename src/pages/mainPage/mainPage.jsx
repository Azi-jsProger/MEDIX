import React from 'react';
import './mainPage.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import ButtonMaterial from "../../components/materialButton/buttonMaterial";
import SelectMaterial from "../../components/materialSelect/SelectMaterial";

const MainPage = () => {
    const { t } = useTranslation(); // Используем useTranslation для получения функции t
    const navigate = useNavigate();

    const styles = {
        width: '200px',
        height: '50px',
        color: '#fff',
        border: '1px solid #fff',
        fontWeight: '700'
    };

    function switchRegister() {
        navigate(`/register`);
    }

    function switchLogin() {
        navigate(`/login`);
    }

    return (
        <div className="flex justify-center flex-col items-center h-screen gap-[30px]">
            <div className="main">
                <ButtonMaterial onClick={switchRegister} style={styles} value={t('register')} />
                <ButtonMaterial onClick={switchLogin} style={styles} value={t('login')} />
            </div>
            <SelectMaterial />
        </div>
    );
};

export default MainPage;
