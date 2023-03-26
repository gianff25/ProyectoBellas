import { DatabaseOutlined, UserAddOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const items = [
    {
      label: <Link to="/" >Inicio</Link>,
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/registrar">Registrar</Link>,
      key: 'registrar',
      icon: <UserAddOutlined />,
    },
    {
      label: <Link to="/datos">Mostrar Datos</Link>,
      key: 'datos',
      icon: <DatabaseOutlined />,
    },
    {
      label: <Link>Cerrar Sesion</Link>,
      danger: true,
      key: 'logout',
      icon: <LogoutOutlined />
    }
  ];

  export default items;