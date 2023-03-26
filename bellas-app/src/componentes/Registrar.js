import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const Registrar = () => {

    
    const [form] = Form.useForm();
    const [db, setDb] = useState(JSON.parse(localStorage.getItem('data')));
    
    useEffect(() => {
        let newDb = JSON.stringify(db);
        localStorage.setItem('data', newDb);
    }, [db])
    
    function generarGuid(longitud) {
        const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = [];
        
        for (let i = 0; i < longitud; i++) {
            resultado.push(ALFABETO.charAt(Math.floor(Math.random() * ALFABETO.length)));
        }
        
        return resultado.join('');
    }
    
    const onFinish = (values) => {
        
        console.log('Success:', values);

        const nuevoUsuario = {
            id: generarGuid(5),
            name: values.name,
            lastName: values.lastName
        }

        if(db != null){
            if(db.filter((e) => e.name === nuevoUsuario.name && e.lastName === nuevoUsuario.lastName).length > 0){
                console.log("ya Existe")
            }
            else{
                Swal.fire(
                    'Usuario Registrado con exito!',
                    '',
                    'success'
                )
                setDb([...db, nuevoUsuario])
                form.resetFields();
            }
        }
        else{
            Swal.fire(
                'Usuario Registrado con exito!',
                '',
                'success'
            )
            setDb([nuevoUsuario]);
        }    
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    return(
        <Form
            form={form}
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={
                {
                    margin: "20vh 25vw",
                    width: "40vw",
                    position: "absolute"
                }
            }
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Nombre"
            name="name"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Apellido"
            name="lastName"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            {/* <Form.Item
            label="Repeat Password"
            name="password2"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item> */}

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
    )
}
export default Registrar;