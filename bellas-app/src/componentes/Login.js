import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { types } from './variables-globales/InitialReducer';
import { useDispatch } from './variables-globales/initialProvider';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../Global.css';
import React, { useEffect, useState } from 'react';
import { urls } from './variables-globales/InitialReducer';
import Swal from 'sweetalert2';

const Login = () => {

    const {Usuarios} = urls;

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [dbUsers, setDbUsers] = useState([]);

    useEffect(() => {
        fetch(Usuarios)
        .then(res => res.json())
        .then(respuesta=> { 
            console.log(respuesta);
            setDbUsers(respuesta);
        })
        console.log(dbUsers)
    }, [])
    
    const onFinish = (values) => {
        console.log('Success:', values);
        
        let auth = dbUsers.filter(e => e.Telefono === values.user && e.Contraseña === values.password );

        console.log(dbUsers)
        if( auth.length > 0){
            localStorage.setItem('usuario', JSON.stringify(auth))
            console.log(localStorage.getItem('usuario'));
            localStorage.setItem('logeado', 1);
            dispatch({type: types.authLogin});
            navigate('/');
            console.log(auth);
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sus datos no son correctos, intentelo de nuevo.',
              })
            console.log('no coincide', values)
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const irRegistro = () => {
        navigate('/registrar')
    }

    return(
        <div className='login'>
            <div className='loginLogo'></div>
        
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <div className='loginContent'>
                    <h2 className='loginSubtitulo'>Celular:</h2>
                    <Form.Item
                        name="user"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input 
                            maxLength={50}
                            placeholder="Celular" 
                            prefix={<UserOutlined />} 
                            style=
                            {
                                {
                                    width: '24vw', 
                                    height: '5.5vh', 
                                    border: "0.3vh solid black",
                                    fontSize: '1.4vw',
                                    padding: '1vh'
                                }
                            }
                        />
                    </Form.Item>
                    <h2 className='loginSubtitulo'>Contraseña:</h2>
                    <Form.Item
                        label=""
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password 
                            maxLength={50} 
                            placeholder="Contraseña" 
                            prefix={<LockOutlined />} 
                            style=
                            {
                                {
                                    width: '24vw', 
                                    height: '5.5vh', 
                                    border: "0.3vh solid black",
                                    fontSize: '1.4vw',
                                    padding: '1vh'
                                }
                            }
                        />
                    </Form.Item>
                </div>
                    
                <div className='loginBotones'>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            style=
                            {
                                {
                                    width: '12vw',
                                    height: '4.5vh',
                                    fontSize: '1.6vw',
                                    padding: '0vh 0vw 5.5vh',
                                    position: 'absolute',
                                    margin: "3vh -10vw",
                                    borderRadius: "1vmax"
                                }
                            }
                        >
                            Iniciar Sesión
                        </Button>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button
                            type='link'
                            style=
                            {
                                {
                                    margin: '3vh -2vw',
                                    width: '12vw',
                                    height: '4.5vh',
                                    fontSize: '1.3vw',
                                    padding: '0vh 0vw 5.5vh',
                                    position: 'absolute',
                                    borderRadius: "1vmax"
                                }
                            }
                            onClick={irRegistro}
                            
                        >
                            Registrarse
                        </Button>
                    </Form.Item>

                </div>

            </Form>
        </div>
    )
}
export default Login;