// import { Button, Col, Form, Input, Row, DatePicker, Space, Select } from 'antd';
// import React, { useEffect, useState } from 'react';
// import { urls } from '../variables-globales/InitialReducer';
// import Swal from 'sweetalert2';
// import moment from 'moment'

const Formulario = ({
    // dbCitas, 
    // onClose,
    // setLoading,
    // opcion,
    // url,
    // Servicios,
    // usuario
}) => {


//     const [nuevaFecha, setNuevaFecha] = useState();


//     const [form] = Form.useForm();
//     const {Nombre, Costo, Fecha, Id, ServicioId, UsuarioId} = opcion;

//     useEffect(() => {
//         debugger
//         if(opcion != null){
//             form.setFieldsValue({
//                 Nombre: UsuarioId,
//                 Necha: moment(Fecha),
//                 Nervicio: ServicioId
//             })
//         }
//         console.log(usuario)
//     }, [opcion])


//     const AñadirCita = async (values) => {
//         console.log(nuevaFecha)

//         let costoServicio = Servicios.filter(x => x.Id === values.servicioId)

//         let cita = {
//             usuarioId: usuario[0].id,
//             servicioId: values.servicioId,
//             costo: costoServicio[0].costo,
//             fecha: new Date(values.fecha),
//             activo: true
//         }

//         console.log(cita)

//         if(dbCitas.filter(e => e.ServicioId === values.servicioId && e.Id != Id).length != 0){
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Ya tiene una cita igual a esta.',
//               })
//         }
//         else{
//             if(Nombre != undefined){
                
//                 let citaEditada = {
//                     id: usuario[0].Id,
//                     usuarioId: values.UsuarioId,
//                     servicioId: values.ServicioId,
//                     costo: costoServicio[0].Costo,
//                     fecha: new Date(values.Fecha),
//                     activo: true
//                 }


//                 if(citaEditada.costo != Costo || citaEditada.usuarioId != UsuarioId || citaEditada.servicioId != ServicioId|| citaEditada.fecha != Fecha){
//                     Swal.fire({
//                         title: 'Seguro que desea actualizar esta cita?',
//                         icon: 'warning',
//                         showCancelButton: true,
//                         confirmButtonColor: '#3085d6',
//                         cancelButtonColor: '#d33',
//                         confirmButtonText: 'Actualizar'
//                       }).then(async(result) => {
//                         if (result.isConfirmed) {
//                             await fetch(url + Id, {
//                                 method: 'PUT',
//                                 headers: {
//                                   "Content-Type": "application/json",
//                               },
//                                 body: JSON.stringify(citaEditada)
//                             })
//                             setLoading(true);
//                             onClose();
//                         }
//                       })
//                 }
//                 else{
//                     console.log("son iguales")
//                 }
//             }
//             else{

//                 await fetch(url, {
//                     method: 'POST',
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(cita)
//                 })
//                 .then(() => {
//                     Swal.fire(
//                         'Nueva cita añadida!',
//                         '',
//                         'success'
//                         )
//                         setLoading(true);
//                         onClose();
//                     })
//             }
//         }
//     }

//   return (
//     <>
//     <Form 
//         form={form}
//         layout="vertical" 
//         onFinish={AñadirCita}
//     >
//           <Row gutter={16}>
//           <Col span={12}>
//               <Form.Item
//                 name="usuarioId"
//                 label="Nombre"
//               >
//                     <Input
//                         disabled
//                         placeholder={usuario[0].Nombre}
//                     />   

//               </Form.Item>
//             </Col>
//             <Col span={12}>
//               <Form.Item
//                 name="servicioId"
//                 label="Servicio"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Seleccionar servicio',
//                   },
//                 ]}
//               >
//                     <Select
//                         placeholder="Servicios"

//                     >   
//                         {Servicios && Servicios.map((u,i)=>
//                             <Select.Option value={u.Id} key={i}>
//                                 {u.Nombre}
//                             </Select.Option>
//                         )}
//                     </Select>
//               </Form.Item>
//             </Col>
//             <Col span={6}>
//                 <Form.Item
//                     label="Fecha"
//                     name="fecha"
//                     rules={[
//                         {
//                           required: true,
//                           message: 'Favor de seleccionar la fecha.',
//                         },
//                     ]}
//                 >  
//                     <DatePicker format={'DD-MM-YYYY'} />
//                 </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
//             <Col style={Nombre != undefined ? {marginRight: "2vw"} : {marginRight: 0}} span={3}>
//                 <Button
//                     type='primary'
//                     htmlType='submit'
//                 >
//                     {Nombre != (undefined) ? "Actualzar" : "Añadir"}
//                 </Button>
                
//             </Col>
//             <Col span={3}>
//                 <Button
//                     onClick={onClose}
//                 >
//                     Cancelar
//                 </Button>
//             </Col> 
//           </Row>
//         </Form>
//     </>
//   )
}

export default Formulario