import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Button, Space, Drawer, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { urls } from '../variables-globales/InitialReducer';
import Fromulario from './Fromulario';
import Swal from 'sweetalert2';
import '../../Global.css';

const Servicios = () => {

    const {Servicios} = urls;

    const [dbServicio, setDbServicio] = useState([]);
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [servicio, setServicio] = useState(false);

    useEffect(() => {
        fetch(Servicios)
        .then(res => res.json())
        .then(respuesta=> { 
            console.log(respuesta);
            setDbServicio(respuesta);
        })
        console.log(dbServicio);
        setLoading(false)
    }, [loading])

    const onOpen = (fila) => {
        setOpen(true);
        setServicio(fila)
    }

    const onClose = () => {
        setOpen(false);
    }

    const eliminarServicio = async (id) =>{
        console.log(id)
        Swal.fire({
            title: 'Seguro que desea eliminar este servicio?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then(async(result) => {
            if (result.isConfirmed) {
                await fetch(Servicios + id, {
                    method: 'DELETE'
                })
                .then(() => {
                    Swal.fire(
                        'Servicio Eliminado con exito!',
                        '',
                        'success'
                    )
                    setLoading(true)
                });

            }
          })
    }

    const filtrar = (e) => {
        let busqueda = e.target.value.toLowerCase();
        setDbServicio(dbServicio.filter(x => x.nombre.toLowerCase().includes(busqueda)))
        if(busqueda == "" && dbServicio.length == 0){
            setLoading(true)
        }
    }

    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'Nombre',
            key: 'nombre'
        },
        {
            title: 'Precio',
            dataIndex: 'Costo',
            key: 'costo'
        },
        {
            title: 'Tiempo Estimado',
            dataIndex: 'TiempoEstimado',
            key: 'tiempoEstimado'
        },
        {
            title: 'Descripcción',
            dataIndex: 'Descripcion',
            key: 'descripcion'
        },
        {
            title: 'Acción',
            key: 'accion',
            render: (_, fila) => (
                <Space size="middle">
                  <Button 
                    onClick={() => onOpen(fila)}
                >
                    <EditOutlined /> 
                    Editar
                </Button>

                <Button 
                    danger 
                    onClick={() => eliminarServicio(fila.id)}
                >
                    <DeleteOutlined /> 
                    Eliminar
                </Button>
                </Space>
            ),
        },
    ]

  return (
    <div className="servicios">
        <Row gutter={16}>
            <Col span={5}>
                <Button
                    type='primary'
                    onClick={onOpen}
                >
                    Nuevo Servicio
                </Button>
            </Col>
            <Col span={16}>
                <Input  
                    placeholder='Bucar por nombre'
                    onChange={filtrar}  
                />
            </Col>
        </Row>
        <Table 
            style={{
                margin: "5vh 0vw",
                width: "70vw",
            }}
            columns={columns}
            dataSource={dbServicio}
            bordered
        />
        <Drawer
            title="Añadir nuevo servicio"
            width={720}
            onClose={() => setOpen(false)}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Fromulario 
                onClose={onClose} 
                dbServicio={dbServicio}
                setLoading={setLoading}
                servicio={servicio}
                url={Servicios}
            />
        </Drawer>
    </div>
  )
}

export default Servicios