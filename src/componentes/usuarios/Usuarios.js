import React, {useState, useEffect} from 'react'
import { Col, Row, Table, Button, Space, Drawer, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { urls } from '../variables-globales/InitialReducer';
import Formulario from './Formulario';
import Swal from 'sweetalert2';

const Usuarios = () => {

    const {Usuarios} = urls;
    const [db, setDb] = useState([]);
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [usuario, setUsuario] = useState();
    const [isEditar, setIsEditar] = useState(false);

    useEffect(() => {
        fetch(Usuarios)
        .then(res => res.json())
        .then(res => {
            setDb(res)
        })
        setLoading(false)
    }, [loading])

    const onOpen = (fila) => {
        fila.Id != undefined ? setIsEditar(true) : setIsEditar(false);
        setOpen(true);
        setUsuario(fila)
    }

    const onClose = () => {
        setOpen(false);
    }

    const eliminar = async (id) =>{
        console.log(id)
        Swal.fire({
            title: 'Seguro que desea eliminar a este usuario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then(async(result) => {
            if (result.isConfirmed) {
                await fetch(Usuarios + id, {
                    method: 'DELETE'
                })
                .then(() => {
                    Swal.fire(
                        'Usuario Eliminado con exito!',
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
        setDb(db.filter(x => x.nombre.toLowerCase().includes(busqueda)))
        if(busqueda === "" && db.length === 0){
            setLoading(true)
        }
    }

    const columns = [
        {
            title: 'Nombre',
            key: 'nombre',
            dataIndex: 'Nombre'
        },
        {
            title: 'Apellido',
            key: 'apellido1',
            dataIndex: 'Apellido1'
        },
        {
            title: 'Correo',
            key: 'correo',
            dataIndex: 'Correo'
        },
        {
            title: 'Telefono',
            key: 'telefono',
            dataIndex: 'Telefono'
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
                    onClick={() => eliminar(fila.id)}
                >
                    <DeleteOutlined /> 
                    Eliminar
                </Button>
                </Space>
            ),
        }
    ]
  return (
    <div className="servicios">
        <Row gutter={16}>
            <Col span={5}>
                <Button
                    type='primary'
                    onClick={onOpen}
                >
                    Nuevo Usuario
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
            dataSource={db}
            columns={columns}
        />
        <Drawer
            title={isEditar ? "Editar usuario" : "Añadir nuevo usuario"}
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Formulario 
                onClose={onClose} 
                db={db}
                setLoading={setLoading}
                usuario={usuario}
                url={Usuarios}
            />
        </Drawer>
    </div>
  )
}

export default Usuarios