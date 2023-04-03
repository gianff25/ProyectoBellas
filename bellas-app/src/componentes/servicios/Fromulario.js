import { Button, Col, Form, Input, Row, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
import { urls } from '../variables-globales/InitialReducer';
import Swal from 'sweetalert2';

const Fromulario = ({
    dbServicio, 
    onClose,
    setLoading,
    servicio
}) => {


    const {Servicios} = urls;
    const [form] = Form.useForm();
    const {nombre, costo, tiempoEstimado, descripcion} = servicio;

    useEffect(() => {
        if(servicio != null){
            console.log(servicio)
            form.setFieldsValue({
                nombre: nombre,
                costo: costo,
                tiempoEstimado: tiempoEstimado,
                descripcion: descripcion
            })
        }
    }, [servicio])

    const AñadirServicio = async (values) => {

        if(dbServicio.filter(e => e.nombre === values.nombre && e.id != servicio.id).length != 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este servicio ya ha sido registrado.',
              })
        }
        else{
            if(servicio.nombre != undefined){
                
                let servicioEditado = {
                    id: servicio.id,
                    nombre: values.nombre,
                    descripcion: values.descripcion,
                    costo: values.costo,
                    tiempoEstimado: values.tiempoEstimado
                }


                if(servicioEditado.costo != servicio.costo || servicio.nombre != servicioEditado.nombre || servicio.tiempoEstimado != servicioEditado.tiempoEstimado || servicio.descripcion != servicioEditado.descripcion){
                    Swal.fire({
                        title: 'Seguro que desea actualizar este servicio?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Actualizar'
                      }).then(async(result) => {
                        if (result.isConfirmed) {
                            console.log(servicioEditado)
                            await fetch(Servicios + servicio.id, {
                                method: 'PUT',
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(servicioEditado)
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

                await fetch(Servicios, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                })
                .then(() => {
                    Swal.fire(
                        'Nuevo servicio añadido!',
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
        onFinish={AñadirServicio}
    >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="nombre"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item
                    label="Precio"
                    name="costo"
                    rules={[
                        {
                          required: true,
                          message: 'Favor de especificar el precio del servicio.',
                        },
                    ]}
                >  
                    <InputNumber style={{width:"100%"}} placeholder='Precio del servicio' />
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item
                    label="Tiempo Estimado"
                    name="tiempoEstimado"
                    rules={[
                        {
                          required: true,
                          message: 'Favor de especificar el tiempo estimado.',
                        },
                    ]}
                >  
                    <InputNumber style={{width:"100%"}} placeholder='Tiempo estimado' />
                </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="descripcion"
                label="Descripción"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col style={servicio.nombre != undefined ? {marginRight: "2vw"} : {marginRight: 0}} span={3}>
                <Button
                    type='primary'
                    htmlType='submit'
                >
                    {servicio.nombre != (undefined) ? "Actualzar" : "Añadir"}
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

export default Fromulario