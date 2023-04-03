
import React from 'react'


const Home = () => {

    let usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario)
  return (
    <>
      <h1>Hola {usuario && usuario[0].nombre} {usuario && usuario[0].apellido1}</h1>
    </>
  )
}

export default Home