import { Button, Form, Input, Col, Row, InputNumber } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../Global.css';
import { urls } from './variables-globales/InitialReducer';


const Registrar = () => {

    const {Usuarios} = urls;

    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [dbUsers, setDbUsers] = useState([]);

    useEffect(() => {
        fetch(Usuarios)
        .then(res => res.json())
        .then(respuesta=> { 
            console.log(respuesta);
            setDbUsers(respuesta);
        })
        console.log(dbUsers);
    }, [])
    
    // function generarGuid(longitud) {
    //     const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let resultado = [];
        
    //     for (let i = 0; i < longitud; i++) {
    //         resultado.push(ALFABETO.charAt(Math.floor(Math.random() * ALFABETO.length)));
    //     }
        
    //     return resultado.join('');
    // }
    
    const onFinish = async (values) => {
        
        console.log('Success:', values);

        let nuevoUsuario;

        if(values.contrasena == values.contrasena2){
            nuevoUsuario = {
                nombre: values.nombre,
                apellido1: values.apellidoPaterno,
                apellido2: values.apellidoMaterno,
                telefono: values.telefono,
                correo: values.correo,
                contraseña: values.contrasena,
                rolId: '52a29750-1c70-4f00-85e7-69c64e7c4c94'
            }

            if(dbUsers.filter((e) => e.telefono == nuevoUsuario.telefono).length > 0){
                console.log("ya Existe")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Este teléfono ya ha sido registrado.',
                  })
            }
            else{
                await fetch(Usuarios, {
                    method: 'POST',
                    // body: {
                    //         "nombre": nuevoUsuario.nombre,
                    //         "apellido1": nuevoUsuario.apellido1,
                    //         "apellido2": nuevoUsuario.apellido2,
                    //         "telefono": nuevoUsuario.telefono,
                    //         "correo": nuevoUsuario.correo,
                    //         "contraseña": nuevoUsuario.contraseña,
                    //         "rolId": "52a29750-1c70-4f00-85e7-69c64e7c4c94"
                    //     },
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoUsuario)
                })
                .then(() => {
                    Swal.fire(
                        'Usuario Registrado con exito!',
                        '',
                        'success'
                    )
                    navigate('/login');
                })
            }

        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las contraseñas no coinciden,',
              })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const irLogin = () => {

        let campos = form.getFieldsValue()
        console.log(campos)

        if((campos.nombre || campos.apellidoPaterno || campos.apellidoMaterno || campos. contrasena || campos.contrasena2 || campos.correo || campos.telefono) != ('' || undefined) ){
            console.log('hay datos')
            Swal.fire({
                title: 'Seguro que desea regresar al inicio?',
                text: "Los campos se borraran!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ir al login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
              })
        }
        else{
            navigate('/login')
        }
    }
    
    return(
        <div className='registro'>
            <Form
                form={form}
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
                <Row style={{height: "15vh"}}>
                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Nombre:</h2>
                        <Form.Item
                            name="nombre"
                            rules={[
                                {
                                required: true,
                                message: 'Favor introducir su nombre.',
                                },
                            ]}
                        >
                            <Input 
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
                    </Col>
                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Apellido Paterno:</h2>
                        <Form.Item
                            name="apellidoPaterno"
                            rules={[
                                {
                                required: true,
                                message: 'Favor introducir su apellido.',
                                },
                            ]}
                        >
                            <Input 
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
                    </Col>
                </Row>
                <Row style={{height: "15vh"}}>
                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Apellido Materno:</h2>
                        <Form.Item
                            name="apellidoMaterno"
                        >
                            <Input 
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
                    </Col>

                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Teléfono:</h2>
                        <Form.Item
                            name="telefono"
                            rules={[
                                {
                                    required:true,
                                    message: 'Favor introducir su telefono.'
                                }
                            ]}
                        >
                            <Input
                                maxLength={10} 
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
                    </Col>
                </Row>
                <Row style={{height: "15vh"}}>
                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Correo:</h2>   
                        <Form.Item
                            name="correo"
                        >
                            <Input
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
                    </Col>
                    <Col span={12}>
                        <h2 className='loginSubtitulo'>Contraseña:</h2>   
                        <Form.Item
                            name="contrasena"
                        >
                            <Input.Password 
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
                    </Col>
                </Row>
                <Row style={{height: "15vh"}}>
                <Col span={12}>
                        <h2 className='loginSubtitulo'>Repetir Contraseña:</h2>   
                        <Form.Item
                            name="contrasena2"
                        >
                            <Input.Password 
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
                    </Col>
                    <Col span={12}>
                        <Row>
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
                                            margin: '1.5vh 12vw',
                                            width: '12vw',
                                            position: 'absolute',
                                        }
                                    }
                                    >
                                    Registrarse
                                </Button>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Button
                                type='link'
                                style=
                                {
                                    {
                                        margin: '0vh 6vw',
                                        width: '12vw',
                                        fontSize: '1.8vw',
                                        position: 'absolute'
                                    }
                                }
                                onClick={irLogin}
                            >
                                Regresar al inicio de sesión
                            </Button>
                        </Row>
                    </Col>
                </Row>


            </Form>

        </div>
    )
}
export default Registrar;