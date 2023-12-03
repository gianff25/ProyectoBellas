import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Servicios from './Servicios';

test('Renderiza el componente de Servicios', () => {
  const { getByText, getByPlaceholderText } = render(<Servicios />);
  
  // Asegurarse de que algunos elementos estén presentes en la pantalla
  const nuevoServicioButton = getByText('Nuevo Servicio');
  const buscarInput = getByPlaceholderText('Bucar por nombre');
  expect(nuevoServicioButton).toBeInTheDocument();
  expect(buscarInput).toBeInTheDocument();
});

test('Abre el formulario de nuevo servicio al hacer clic en "Nuevo Servicio"', () => {
  const { getByText } = render(<Servicios />);
  const nuevoServicioButton = getByText('Nuevo Servicio');

  fireEvent.click(nuevoServicioButton);

  const formularioTitle = getByText('Añadir nuevo servicio');
  expect(formularioTitle).toBeInTheDocument();
});

test('Elimina un servicio al hacer clic en "Eliminar"', async () => {
  const { getByText } = render(<Servicios />);
  const eliminarButton = getByText('Eliminar');

  // Simular confirmación de eliminación (puedes utilizar jest.spyOn para simular Swal.fire)
  jest.spyOn(window, 'Swal').mockResolvedValue({ isConfirmed: true });

  fireEvent.click(eliminarButton);

  // Espera a que se complete la acción asíncrona
  await waitFor(() => {
    const mensajeExito = getByText('Servicio Eliminado con exito!');
    expect(mensajeExito).toBeInTheDocument();
  });
});
