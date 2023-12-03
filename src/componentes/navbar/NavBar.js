import { Menu} from 'antd';
import { useState, useEf, useEffect } from 'react';
import items from './NavBarConfig';
import { iAdmin } from './NavBarConfig';
import {  useNavigate, Outlet } from 'react-router-dom';
import { types, urls } from '../variables-globales/InitialReducer';
import { useDispatch } from '../variables-globales/initialProvider';

const NavBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [current, setCurrent] = useState('mail');
    const [lista, setLista] = useState([]);
    const {Roles} = urls;

    let usuario = JSON.parse(localStorage.getItem('usuario'));

    console.log(usuario)

    useEffect(() => {
    //   fetch(Roles)
    //   .then(res=>res.json())
    //   .then(res => {
    //     let rol = res.filter(x => x.id === usuario[0].rolId)
    //     console.log(rol)
    //     if(rol[0].nombre !== "Administrador"){
    //       setLista(items)
    //     }
    //     else{
    //       setLista(iAdmin)
    //     }
    //   })

    setLista(iAdmin)

    }, [])

    
    const onClick = (e) => {

      console.log('click ', e);
      setCurrent(e.key);
      if(e.key === 'logout'){
        localStorage.setItem('logeado', 0);
        localStorage.removeItem('usuario')
        dispatch({type: types.authLogout});  
        navigate('/login');
      }
    };
    
    
    return(
        <>
        <Menu 
            onClick={onClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={lista} 
        /> 
        <Outlet />
        </>
    )
}
export default NavBar;