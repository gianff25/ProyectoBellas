
import React from 'react'


const Home = () => {

    let usuario = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario)
  return (
    <>
      <h1>Hola {usuario && usuario[0].Nombre} {usuario && usuario[0].Apellido1}</h1>
    </>
  )
}

export default Home