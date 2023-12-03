import './App.css';
// import axios, {AxiosResponse} from 'axios';
import NavBar from './componentes/navbar/NavBar';
import {Route, Routes} from 'react-router-dom'
import Login from './componentes/Login';
import Registrar from "./componentes/Registrar";
import PrivateRoute from './componentes/rutas/PrivateRoute';
import Home from './componentes/Home';
import { useLogeado } from './componentes/variables-globales/initialProvider';
import Servicios from './componentes/servicios/Servicios';
import { urls } from './componentes/variables-globales/InitialReducer';
import Usuarios from './componentes/usuarios/Usuarios';
import React, { useEffect } from 'react';


function App() {

  const {Citas} = urls;
  const estado = useLogeado();

  const {logeado} = estado;
  console.log(logeado)

  useEffect(() => {
    localStorage.getItem('data') == null ? (localStorage.setItem('data', JSON.stringfy([{"id":"Iamwv","name":"Juan","lastName":"Peres"},{"id":"lorbU","name":"Jorge","lastName":"Robles"},{"id":"CvQhF","name":"Jose","lastName":"Hernandez"},{"id":"dgDc9","name":"Corni","lastName":"Rojo"}]))) : <></>;
    localStorage.getItem('logeado') == null ? (localStorage.setItem('logeado', 0)) : <></>;
  }, [])

  return (
    <div className="App">
        <Routes>
            <Route path='*' element={<h1>Not Found!!</h1>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/registrar" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo={logeado == 0 ? "/registrar" : "/"} isRegistro={true}>
                    <Registrar/>
                  </PrivateRoute>
                }
              />
            <Route exact path="/" element={<NavBar  />} >
              <Route index 
                element={
                  <PrivateRoute logeado={logeado} redirectTo={"/login"}>
                    <Home />
                  </PrivateRoute>
                } 
              />
              <Route path="/citas" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo="/login" >
                    <Citas />
                  </PrivateRoute>
                } 
              />
              <Route path="/servicios" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo="/login" >
                    <Servicios />
                  </PrivateRoute>
                } 
              />
              <Route path="/usuarios" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo="/login" >
                    <Usuarios />
                  </PrivateRoute>
                } 
              />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
