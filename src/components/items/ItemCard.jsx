import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from '../common/Button';
import { formatDate } from '../../utils/dateUtils';

// componente que recibe props item, onEdit, onDelete reutilizable muestra los botones
export const ItemCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-gray-600 mb-2">{item.description}</p>
          )}
          <div className="flex gap-4 text-sm text-gray-500">
            <span>ID: {item.studentId}</span>
            <span>Creado: {formatDate(item.createdAt)}</span>
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <Button
            variant="success"
            icon={<Edit size={20} />}
            onClick={() => onEdit(item)}
            className="p-2"
            title="Editar"
          />
          <Button
            variant="danger"
            icon={<Trash2 size={20} />}
            onClick={() => onDelete(item.id)}
            className="p-2"
            title="Eliminar"
          />
        </div>
      </div>
    </div>
  );
};