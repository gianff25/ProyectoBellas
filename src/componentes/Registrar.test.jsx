import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Registrar from './Registrar';

test('Renderiza el componente de registro', () => {
  const { getByText, getByPlaceholderText } = render(<Registrar />);
  
  // Asegurarse de que algunos elementos estén presentes en la pantalla
  const nombreInput = getByPlaceholderText('Nombre');
  const apellidoPaternoInput = getByPlaceholderText('Apellido Paterno');
  const telefonoInput = getByPlaceholderText('Teléfono');
  const correoInput = getByPlaceholderText('Correo');
  const contrasenaInput = getByPlaceholderText('Contraseña');
  const contrasena2Input = getByPlaceholderText('Repetir Contraseña');
  const registrarseButton = getByText('Registrarse');
  const regresarButton = getByText('Regresar al inicio de sesión');

  expect(nombreInput).toBeInTheDocument();
  expect(apellidoPaternoInput).toBeInTheDocument();
  expect(telefonoInput).toBeInTheDocument();
  expect(correoInput).toBeInTheDocument();
  expect(contrasenaInput).toBeInTheDocument();
  expect(contrasena2Input).toBeInTheDocument();
  expect(registrarseButton).toBeInTheDocument();
  expect(regresarButton).toBeInTheDocument();A
});

test('Registro exitoso con credenciales válidas', async () => {
  const { getByPlaceholderText, getByText } = render(<Registrar />);
  const fetchMock = jest.spyOn(window, 'fetch');
  fetchMock.mockResolvedValue({
    json: () => Promise.resolve([]),
  });

  const nombreInput = getByPlaceholderText('Nombre');
  const apellidoPaternoInput = getByPlaceholderText('Apellido Paterno');
  const telefonoInput = getByPlaceholderText('Teléfono');
  const correoInput = getByPlaceholderText('Correo');
  const contrasenaInput = getByPlaceholderText('Contraseña');
  const contrasena2Input = getByPlaceholderText('Repetir Contraseña');
  const registrarseButton = getByText('Registrarse');

  fireEvent.change(nombreInput, { target: { value: 'John' } });
  fireEvent.change(apellidoPaternoInput, { target: { value: 'Doe' } });
  fireEvent.change(telefonoInput, { target: { value: '1234567890' } });
  fireEvent.change(correoInput, { target: { value: 'john@example.com' } });
  fireEvent.change(contrasenaInput, { target: { value: 'password' } });
  fireEvent.change(contrasena2Input, { target: { value: 'password' } });

  fireEvent.click(registrarseButton);

  // Espera a que se complete la acción asíncrona
  await waitFor(() => {
    const mensajeExito = getByText('Usuario Registrado con exito!');
    expect(mensajeExito).toBeInTheDocument();
  });

  fetchMock.mockRestore();
});

test('Muestra un mensaje de error con contraseñas no coincidentes', async () => {
  const { getByPlaceholderText, getByText } = render(<Registrar />);
  const fetchMock = jest.spyOn(window, 'fetch');
  fetchMock.mockResolvedValue({
    json: () => Promise.resolve([]),
  });

  const contrasenaInput = getByPlaceholderText('Contraseña');
  const contrasena2Input = getByPlaceholderText('Repetir Contraseña');
  const registrarseButton = getByText('Registrarse');

  fireEvent.change(contrasenaInput, { target: { value: 'password' } });
  fireEvent.change(contrasena2Input, { target: { value: 'incorrect' } });

  fireEvent.click(registrarseButton);

  // Espera a que se complete la acción asíncrona
  await waitFor(() => {
    const mensajeError = getByText('Las contraseñas no coinciden,');
    expect(mensajeError).toBeInTheDocument();
  });

  fetchMock.mockRestore();
});
