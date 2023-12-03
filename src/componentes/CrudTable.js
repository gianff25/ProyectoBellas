// import { useEffect, useState } from "react";
// import { DeleteOutlined, EditOutlined, LoadingOutlined} from '@ant-design/icons';
// import { Space, Button, Table, Modal, Input } from 'antd';
// import Swal from 'sweetalert2'


const CrudTable = () => {
    // let db = JSON.parse(localStorage.getItem('data'));
    // const [loading, setLoading] = useState(false);
    // const [dbCita, setDbCita] = useState([]);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [user, setUser] = useState([]);


    // const remover = (id) => {
        
    //     Swal.fire({
    //         title: 'Seguro que desea eliminar a este usuario',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Confirmar'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             setLoading(true);
    //             Swal.fire(
    //                 'Usuario Eliminado!'
    //                 )
    //             let newDb = JSON.stringify(db.filter(e => e.id !== id))

    //             localStorage.setItem('data', newDb)
    //         }
    //       })
    // }

    // const editar = (id) => {
        
    //     let usuario = db.filter(e => e.id === id);

        
    //     setUser({
    //         id: usuario[0].id,
    //         name: usuario[0].name,
    //         lastName: usuario[0].lastName
    //     })
        
    //     setIsModalOpen(true)

    // }

    // const handleOk = () => {
    //     setLoading(true);
    //     Swal.fire({
    //         title: 'Seguro que desea modificar a este usuario',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Confirmar'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             setLoading(true);
    //             Swal.fire(
    //                 'Usuario Modificado!',
    //                 '',
    //                 'success'
    //             )
            
    //             const usuariosEditados = db.map((e) => {
    //                 if(e.id === user.id){
    //                     return{
    //                         ...e,
    //                         name: user.name,
    //                         lastName: user.lastName
    //                     }
    //                 }
    //                 return e
    //             })
            
            
    //         if(db.filter((e) => e.name === user.name && e.lastName === user.lastName).length > 0){
    //             console.log("ya Existe")
    //         }
    //         else{
    //             let newDb = JSON.stringify(usuariosEditados)

    //             localStorage.setItem('data', newDb)
    //         }    
    //         }
    //         setIsModalOpen(false);
    //       })

    //       setLoading(false);

    // };

    //   const handleCancel = () => {
    //       setUser({
    //           id: '',
    //           name: '',
    //           lastName: ''
    //         })
    //     setIsModalOpen(false);
    //   };

    // useEffect(() => {
    //     setLoading(false);
    // }, [db])

    // const colums = [
    //     {
    //         title: 'ID',
    //         dataIndex: 'id',
    //         key: 'id'
    //     },
    //     {
    //         title:'Nombre',
    //         dataIndex: 'name',
    //         key: 'name'
    //     },
    //     {
    //         title: 'Apellido',
    //         dataIndex: 'lastName',
    //         key: 'lastname',
    //     },
    //     {
    //         title: 'Acción',
    //         key: 'accion',
    //         render: (_, fila) => (
    //             <Space size="middle">
    //               <Button 
    //                 onClick={() => editar(fila.id)}
    //             >
    //                 <EditOutlined /> 
    //                 Editar
    //             </Button>

    //             <Button 
    //                 danger 
    //                 onClick={() => remover(fila.id)}
    //             >
    //                 <DeleteOutlined /> 
    //                 Eliminar
    //             </Button>
    //             </Space>
    //         ),
    //     },
    // ]

    return(
         <>
        {/* <Tabla 
            nombre={'Cita'}
            db={dbServicio}
            setLoading={setLoading}
        /> */}
        {/*{loading ? 
                (<LoadingOutlined />) 
                : 
                (<Table 
                    style={{
                        margin: "20vh 12vw",
                        width: "70vw",
                        position: "absolute",
                    }}
                    dataSource={db}
                    columns={colums}
                    bordered
                />)
            }
            <Modal 
                title="Editar Usuario" 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >   
                <div>
                    <Input 
                        className="editInput"
                        prefix="ID:"
                        disabled
                        value={user.id}
                    />
                    <Input 
                        className="editInput"
                        prefix="NOMBRE:"
                        value={user.name}
                        onChange={e => setUser({...user, name: e.target.value})}
                    />
                    <Input 
                        value={user.lastName}
                        className="editInput"
                        prefix="APELLIDO:"
                        onChange={e => setUser({...user, lastName: e.target.value})}
                    />
                </div>
            </Modal> */}
        </>
    )
}
export default CrudTable;

