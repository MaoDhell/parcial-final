import React from 'react';
import { X } from 'lucide-react';
import { ItemForm } from '../components/forms/ItemForm';
import { Button } from '../components/common/Button';

// pagina de formulario para crear o editar un item
export const FormPage = ({ item, onSave, onCancel }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {item ? 'Editar Item' : 'Nuevo Item'}
        </h1>
        <Button
          variant="secondary"
          icon={<X size={24} />}
          onClick={onCancel}
          className="p-2"
          title="Cancelar"
        />
      </div>

      <ItemForm item={item} onSave={onSave} onCancel={onCancel} />
    </div>
  );
};