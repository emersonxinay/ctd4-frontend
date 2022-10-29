import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "tw-elements";
import "./index.css";
import './alert.css';
import App from "./app/App"
import SignUp from "./views/SignUp/signUp";
import { Login } from './views/login/Login';
import PerfilHome from './views/Perfil/pages/PerfilHome';
import DatosPersonal from './views/Perfil/pages/DatosPersonal';
import PerfilEducacion from './views/Perfil/pages/PerfilEducacion';
import PerfilLaboral from './views/Perfil/pages/PerfilLaboral';
import Experiencia from './views/Perfil/pages/Experiencia';
import Acerca from './views/Perfil/pages/Acerca';
import { LoggedUserProvider } from './contexts/auth/LoggedUser'
import { Mapa } from './views/Mapa/Mapa';
import Formulario from './views/Formulario/Formulario'


const root = ReactDOM.createRoot(document.getElementById('root'));
const isAuthenticated = JSON.parse(window.localStorage.getItem("user"));

root.render(
  <React.StrictMode>
    <LoggedUserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          {/* <App /> */}
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/perfil' element={isAuthenticated ? <PerfilHome /> : <Navigate replace to="/login" />} />
          <Route path='/datospersonales' element={isAuthenticated ? <DatosPersonal /> : <Navigate replace to="/login" />} />
          <Route path='/perfileducacional' element={isAuthenticated ? <PerfilEducacion /> : <Navigate replace to="/login" />} />
          <Route path='/perfilLaboral' element={isAuthenticated ? <PerfilLaboral /> : <Navigate replace to="/login" />} />
          <Route path='/experiencia' element={isAuthenticated ? <Experiencia /> : <Navigate replace to="/login" />} />
          <Route path='/Acercadeti' element={isAuthenticated ? <Acerca /> : <Navigate replace to="/login" />} />
          <Route path='/mapa' element={isAuthenticated ? <Mapa /> : <Navigate replace to="/login" />} />
          <Route path='/formulario' element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </LoggedUserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
