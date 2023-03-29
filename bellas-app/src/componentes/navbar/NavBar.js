import { Menu } from 'antd';
import { useState } from 'react';
import items from './NavBarConfig';
import {  useNavigate, Outlet } from 'react-router-dom';
import { types } from '../variables-globales/InitialReducer';
import { useDispatch } from '../variables-globales/initialProvider';


const NavBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [current, setCurrent] = useState('mail');

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
            items={items} 
        />
        <Outlet />
        </>
    )
}
export default NavBar;