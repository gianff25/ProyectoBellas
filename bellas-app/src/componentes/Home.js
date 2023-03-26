
import React from 'react'

const Home = () => {

    let usuario = JSON.parse(localStorage.getItem('usuario'));
  return (
    <h1>Hola {usuario[0].name} {usuario[0].lastName}</h1>
  )
}

export default Home