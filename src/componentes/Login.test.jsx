// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import Login from './Login';

// test('Renderiza el componente de inicio de sesión', () => {
//   const { getByText, getByPlaceholderText } = render(<Login />);
  
//   // Asegurarse de que algunos elementos estén presentes en la pantalla
//   const celularInput = getByPlaceholderText('Celular');
//   const contraseñaInput = getByPlaceholderText('Contraseña');
//   const iniciarSesionButton = getByText('Iniciar Sesión');
//   const registrarseButton = getByText('Registrarse');

//   expect(celularInput).toBeInTheDocument();
//   expect(contraseñaInput).toBeInTheDocument();
//   expect(iniciarSesionButton).toBeInTheDocument();
//   expect(registrarseButton).toBeInTheDocument();
// });

// test('Inicia sesión correctamente con credenciales válidas', async () => {
//   const { getByPlaceholderText, getByText } = render(<Login />);

//   // Simular la carga de usuarios desde la API (puedes usar jest.spyOn o jest.mock para simular fetch)
//   jest.spyOn(window, 'fetch').mockResolvedValue({
//     json: () => Promise.resolve([{ Telefono: 'usuario', Contraseña: 'contraseña' }]),
//   });

//   const usuarioInput = getByPlaceholderText('Celular');
//   const contraseñaInput = getByPlaceholderText('Contraseña');
//   const iniciarSesionButton = getByText('Iniciar Sesión');

//   fireEvent.change(usuarioInput, { target: { value: 'usuario' } });
//   fireEvent.change(contraseñaInput, { target: { value: 'contraseña' } });

//   fireEvent.click(iniciarSesionButton);

//   // Espera a que se complete la acción asíncrona
//   await waitFor(() => {
//     const mensajeSesionIniciada = getByText('¡Sesión iniciada con éxito!');
//     expect(mensajeSesionIniciada).toBeInTheDocument();
//   });
// });

// test('Muestra un mensaje de error con credenciales inválidas', async () => {
//   const { getByPlaceholderText, getByText } = render(<Login />);

//   // Simular la carga de usuarios desde la API (puedes usar jest.spyOn o jest.mock para simular fetch)
//   jest.spyOn(window, 'fetch').mockResolvedValue({
//     json: () => Promise.resolve([]), // No hay usuarios válidos
//   });

//   const usuarioInput = getByPlaceholderText('Celular');
//   const contraseñaInput = getByPlaceholderText('Contraseña');
//   const iniciarSesionButton = getByText('Iniciar Sesión');

//   fireEvent.change(usuarioInput, { target: { value: 'usuario' } });
//   fireEvent.change(contraseñaInput, { target: { value: 'contraseniaIncorrecta' } });

//   fireEvent.click(iniciarSesionButton);

//   // Espera a que se complete la acción asíncrona
//   await waitFor(() => {
//     const mensajeError = getByText('Sus datos no son correctos, intentelo de nuevo.');
//     expect(mensajeError).toBeInTheDocument();
//   });
// });