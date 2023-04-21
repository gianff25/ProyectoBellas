import { DatabaseOutlined, SettingOutlined, HomeOutlined, LogoutOutlined, ScheduleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const items = [
    {
      label: <Link to="/" >Inicio</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/citas">Citas</Link>,
      key: 'citas',
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link>Cerrar Sesion</Link>,
      danger: true,
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ];
  export default items;

  export const iAdmin = [
    {
      label: <Link to="/" >Inicio</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/citas">Citas</Link>,
      key: 'citas',
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link>Administrador</Link>,
      key:'admin',
      icon: <SettingOutlined />,
      children:[
        {
          label: <Link to="/servicios">Servicios</Link>,
          key: 'servicios'
        },
        {
          label: <Link to="/usuarios">Usuarios</Link>,
          key: 'usuarios'
        }
      ]
    },
    {
      label: <Link>Cerrar Sesion</Link>,
      danger: true,
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ];