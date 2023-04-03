import { DatabaseOutlined, SettingOutlined, HomeOutlined, LogoutOutlined, ScheduleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const items = [
    {
      label: <Link to="/" >Inicio</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/datos">Citas</Link>,
      key: 'datos',
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

  export default items;