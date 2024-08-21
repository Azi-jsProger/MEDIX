import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Admin from "../ADMINS/admin";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={`/`} element={<MainPage />}  />
            <Route path={`/register`} element={<RegisterPage />}  />
            <Route path={`/login`} element={<LoginPage />}  />
            <Route path={`/admin`} element={<Admin/>} />
        </Routes>
    );
};

export default MainRoutes;