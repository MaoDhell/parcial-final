import React from 'react';
import { ItemCard } from './ItemCard';


// muestra la lista de items o un mensaje si no hay items
export const ItemList = ({ items, onEdit, onDelete }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No hay items todavía</p>
        <p className="text-gray-400 mt-2">Haz clic en "Nuevo Item" para crear uno</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};