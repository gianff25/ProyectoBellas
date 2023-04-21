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
    const {nombre, apellido1, apellido2, correo, telefono, contraseña, rolId} = usuario;

    useEffect(() => {
        fetch(Roles)
        .then(res=>res.json())
        .then(res=> setRoles(res))
        if(usuario != null){
            form.setFieldsValue({
                nombre: nombre,
                apellido1: apellido1,
                apellido2: apellido2,
                telefono: telefono,
                correo: correo,
                contraseña: contraseña,
                rolId: rolId
            })
        }
    }, [usuario])

    const AñadirUsuario = async (values) => {

        if(db.filter(e => e.telefono === values.nombre && e.id != usuario.id).length != 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este usuario ya ha sido registrado.',
              })
        }
        else{
            if(usuario.nombre != undefined){
                
                let usuarioEditado = {
                    id: usuario.id,
                    nombre: values.nombre,
                    apellido1: values.apellido1,
                    apellido2: values.apellido2,
                    telefono: values.telefono,
                    correo: values.correo,
                    contraseña: values.contraseña,
                    rolId: values.rolId
                }


                if(usuarioEditado.apellido1 != apellido1 || nombre != usuarioEditado.nombre || apellido2 != usuarioEditado.apellido2 
                    || usuarioEditado.telefono != telefono || usuarioEditado.correo != correo || usuarioEditado.contraseña != contraseña
                    || rolId != usuarioEditado.rolId){
                    Swal.fire({
                        title: 'Seguro que desea actualizar este usuario?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Actualizar'
                      }).then(async(result) => {
                        if (result.isConfirmed) {
                            await fetch(url + usuario.id, {
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
                name="nombre"
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
                    name="apellido1"
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
                    name="apellido2"
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
                name="telefono"
                label="Telefono"
                rules={[
                  {
                    required: true,
                    message: 'Introducir telefono',
                  },
                ]}
              >
                <Input placeholder="Número de telefono" />
              </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="Correo"
                    name="correo"
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
                    name="contraseña"
                    rules={[
                        {
                          required: true,
                          message: 'Introducir contraseña .',
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
                name="rolId"
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
                            <Select.Option value={u.id} key={i}>
                                {u.nombre}
                            </Select.Option>
                        )}
                    </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col style={usuario.nombre != undefined ? {marginRight: "2vw"} : {marginRight: 0}} span={3}>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    {usuario.nombre != (undefined) ? "Actualzar" : "Añadir"}
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