import React from 'react';

//estamos esperando datos de Firebase entonces mostramos un spinner de carga
export const Loading = ({ message = 'Cargando...' }) => {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      <p className="mt-4 text-gray-600">{message}</p>
    </div>
  );
};