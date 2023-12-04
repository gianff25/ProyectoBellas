import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { urls } from '../variables-globales/InitialReducer';

const Formulario = ({
    onClose,
    db,
    setLoading,
    usuario,
    url
}) => {
    
    const [form] = Form.useForm();
    const {Roles} = urls;
    const [roles, setRoles] = useState([]);
    const {Nombre, Apellido1, Apellido2, Correo, Telefono, Contraseña, RolId} = usuario;

    useEffect(() => {
        fetch(Roles)
        .then(res=>res.json())
        .then(res=> setRoles(res))
        if(usuario != null){
            form.setFieldsValue({
                Nombre: Nombre,
                Apellido1: Apellido1,
                Apellido2: Apellido2,
                Telefono: Telefono,
                Correo: Correo,
                Contraseña: Contraseña,
                RolId: RolId
            })
        }
    }, [usuario])

    const AñadirUsuario = async (values) => {

      console.log(values)
        if(db.filter(e => e.Telefono === values.Nombre && e.Id != usuario.Id).length != 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este usuario ya ha sido registrado.',
              })
        }
        else{
            if(usuario.Nombre != undefined){
                
                let usuarioEditado = {
                    Id: usuario.Id,
                    Nombre: values.Nombre,
                    Apellido1: values.Apellido1,
                    Apellido2: values.Apellido2,
                    Telefono: values.Telefono,
                    Correo: values.Correo,
                    Contraseña: values.Contraseña,
                    RolId: values.RolId
                }


                if(usuarioEditado.Apellido1 != Apellido1 || Nombre != usuarioEditado.Nombre || Apellido2 != usuarioEditado.Apellido2 
                    || usuarioEditado.Telefono != Telefono || usuarioEditado.Correo != Correo || usuarioEditado.Contraseña != Contraseña
                    || RolId != usuarioEditado.RolId){
                    Swal.fire({
                        title: 'Seguro que desea actualizar este usuario?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Actualizar'
                      }).then(async(result) => {
                        if (result.isConfirmed) {
                            await fetch(url + usuario.Id, {
                                method: 'PUT',
                                headers: {
                                  "Content-Type": "application/json",
                                  },
                                body: JSON.stringify(usuarioEditado)
                            })
                            setLoading(true);
                            onClose();
                        }
                      })
                }
                else{
                    console.log("son iguales")
                }
            }
            else{

                await fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                })
                .then(() => {
                    Swal.fire(
                        'Nuevo usuario añadido!',
                        '',
                        'success'
                        )
                        setLoading(true);
                        onClose();
                    })
            }
        }
    }

  return (
    <>
    <Form 
        form={form}
        layout="vertical" 
        onFinish={AñadirUsuario}
    >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="Nombre"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    message: 'Introducir nombre',
                  },
                ]}
              >
                <Input placeholder="Nombre del usuario" />
              </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Apellido Paterno"
                    name="Apellido1"
                    rules={[
                        {
                          required: true,
                          message: 'Introducir apellido .',
                        },
                    ]}
                >  
                    <Input placeholder='Apellido Paterno ' />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Apellido Materno"
                    name="Apellido2"
                    rules={[
                        {
                          required: true,
                          message: 'Introducir apellido .',
                        },
                    ]}
                >  
                    <Input placeholder='Apellido Materno ' />
                </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="Telefono"
                label="Telefono"
                rules={[
                  {
                    required: true,
                    message: 'Introducir Telefono',
                  },
                ]}
              >
                <Input placeholder="Número de Telefono" />
              </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Correo"
                    name="Correo"
                    rules={[
                        {
                          required: true,
                          message: 'Introducir Correo electronico .',
                        },
                    ]}
                >  
                    <Input placeholder='Correo electronico ' />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Contraseña"
                    name="Contraseña"
                    rules={[
                        {
                          required: true,
                          message: 'Introducir Contraseña .',
                        },
                    ]}
                >  
                    <Input.Password placeholder='Contraseña ' />
                </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="RolId"
                label="DRol"
                rules={[
                  {
                    required: true,
                    message: 'Seleccionar rol',
                  },
                ]}
              >
                    <Select
                        placeholder="Rol"

                    >   
                        {roles && roles.map((u,i)=>
                            <Select.Option value={u.Id} key={i}>
                                {u.Nombre}
                            </Select.Option>
                        )}
                    </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col style={usuario.Nombre != undefined ? {marginRight: "2vw"} : {marginRight: 0}} span={3}>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    {usuario.Nombre != (undefined) ? "Actualzar" : "Añadir"}
                </Button>
                
            </Col>
            <Col span={3}>
                <Button
                    onClick={onClose}
                >
                    Cancelar
                </Button>
            </Col>
          </Row>
        </Form>
    </>
  )
}

export default Formulario