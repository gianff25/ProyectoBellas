import './App.css';
import axios, {AxiosResponse} from 'axios';
import NavBar from './componentes/navbar/NavBar';
import {Route, Routes} from 'react-router-dom'
import CrudTable from "./componentes/CrudTable";
import Login from "./componentes/Login";
import Registrar from "./componentes/Registrar";
import PrivateRoute from './componentes/rutas/PrivateRoute';
import Home from './componentes/Home';
import { useLogeado } from './componentes/variables-globales/initialProvider';
import { urls } from './componentes/variables-globales/InitialReducer';
import React, { useEffect } from 'react';


function App() {

  const {Citas} = urls;
  // const estado = useLogeado();

  // const {logeado} = estado;
  // console.log(logeado)

  useEffect(() => {
    axios.get(Citas)
      .then((respuesta: AxiosResponse<any>) => {
        console.log(respuesta.data);
      })
  }, [])

  return (
    <div className="App">
        {/* <Routes>
            <Route path='*' element={<h1>Not Found!!</h1>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<NavBar  />} >
              <Route index element={<Home />} />
              <Route exact path="/registrar" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo={logeado === 1 ? "/" : "/login"} isRol={true} >
                    <Registrar/>
                  </PrivateRoute>
                }
              />
              <Route path="/datos" 
                element={
                  <PrivateRoute logeado={logeado} redirectTo="/login" >
                    <CrudTable />
                  </PrivateRoute>
                } 
                />
            </Route>
        </Routes> */}
    </div>
  );
}

export default App;