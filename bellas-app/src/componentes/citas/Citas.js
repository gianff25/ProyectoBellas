import React, { useEffect, useState } from 'react';
import { Col, Row, Table, Button, Space, Drawer, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { urls } from '../variables-globales/InitialReducer';
import Formulario from './Formulario';
import Swal from 'sweetalert2';
import '../../Global.css';

const Citas = () => {

    let user = JSON.parse(localStorage.getItem('usuario'))

    const {Citas, Servicios} = urls;
    const [dbCitas, setDbCitas] = useState([]);
    const [dbServicio, setDbServicio] = useState([]);
    const [loading, setLoading] = useState(false);
    const [opcion, setOpcion] = useState()
    const [open, setOpen] = useState(false)
    const [lista, setLista] = useState([])

    const onOpen = (fila) => {
        setOpen(true);
        setOpcion(fila)
    }

    const onClose = () => {
        setOpen(false);
    }

    const eliminarCita = async (id) =>{
        Swal.fire({
            title: 'Seguro que desea eliminar esta cita?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then(async(result) => {
            if (result.isConfirmed) {
                await fetch(Citas + id, {
                    method: 'DELETE'
                })
                .then(() => {
                    Swal.fire(
                        'Cita Eliminado con exito!',
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
        if(busqueda == "" || lista.length == 0){
            setLoading(true)
        }
        setLista(lista.filter(x => x.nombre.toLowerCase().includes(busqueda)))
    }


    useEffect(() => {
       fetch(Servicios)
        .then(res => res.json())
        .then(respuesta=> { 
            setDbServicio(respuesta);
        })
        fetch(Citas)
        .then(res => res.json())
        .then(respuesta=> { 
            setDbCitas(respuesta.filter(x=> x.usuarioId===user[0].id && x.activo === true));
        })

        setLista(dbCitas.map(fila => {
            let servicio = dbServicio.filter(x=> x.id === fila.servicioId)
           return{
                id: fila.id,
                nombre: user[0].nombre,
                servicio: servicio[0].nombre,
                costo: servicio[0].costo,
                fecha: fila.fecha,
                servicioId: fila.servicioId,
                usuarioId: fila.usuarioId
           } 
        }))


        setLoading(false)

    }, [loading])

    console.log(lista)
    const columns = [
        {
            title: 'Nombre',
            key: 'nombre',
            // render: ((_,fila) => {
            //     let usuario = dbUsuarios.filter(x=> x.id === fila.usuarioId)
            //     return (
            //         <p>{usuario && usuario[0].nombre}</p>
            //     )
            // })
            dataIndex: 'nombre'
        },
        {
            title: 'Servicio',
            key: 'servicio',
            dataIndex: 'servicio'
            // render: ((_,fila) => {
            //     let servicio = dbServicio.filter(x=> x.id === fila.servicioId)
            //     return (
            //         <p>{servicio && servicio[0].nombre}</p>
            //     )
            // })
        },
        {
            title: 'Precio',
            key: 'costo',
            dataIndex: 'costo'
            // render: ((_,fila) => {
            //     let servicio = dbServicio.filter(x=> x.id === fila.servicioId)
            //     return (
            //         <p>{servicio && servicio[0].costo}</p>
            //     )
            // })
        },
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha'
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
                    onClick={() => eliminarCita(fila.id)}
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
                    Nueva Cita
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
            dataSource={lista}
            bordered
        />
        <Drawer
            title="Añadir nueva cita"
            width={720}
            onClose={() => setOpen(false)}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Formulario 
                onClose={onClose} 
                dbCitas={dbCitas}
                setLoading={setLoading}
                opcion={opcion}
                url={Citas}
                Servicios={dbServicio}
                usuario={user}
            />
        </Drawer>
    </div>
  )
}

export default Citas