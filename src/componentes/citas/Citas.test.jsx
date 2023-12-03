import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Citas from './Citas';

test('Renderiza el componente de Citas', () => {
  const { getByText, getByPlaceholderText } = render(<Citas />);
  
  // Asegurarse de que algunos elementos estén presentes en la pantalla
  const nuevaCitaButton = getByText('Nueva Cita');
  const buscarInput = getByPlaceholderText('Bucar por nombre');
  expect(nuevaCitaButton).toBeInTheDocument();
  expect(buscarInput).toBeInTheDocument();
});

test('Abre el formulario de nueva cita al hacer clic en "Nueva Cita"', () => {
  const { getByText } = render(<Citas />);
  const nuevaCitaButton = getByText('Nueva Cita');

  fireEvent.click(nuevaCitaButton);

  const formularioTitle = getByText('Añadir nueva cita');
  expect(formularioTitle).toBeInTheDocument();
});

test('Elimina una cita al hacer clic en "Eliminar"', async () => {
  const { getByText } = render(<Citas />);
  const eliminarButton = getByText('Eliminar');

  // Simular confirmación de eliminación (puedes utilizar jest.spyOn para simular Swal.fire)
  jest.spyOn(window, 'Swal').mockResolvedValue({ isConfirmed: true });

  fireEvent.click(eliminarButton);

  // Espera a que se complete la acción asíncrona
  await waitFor(() => {
    const mensajeExito = getByText('Cita Eliminado con exito!');
    expect(mensajeExito).toBeInTheDocument();
  });
});
