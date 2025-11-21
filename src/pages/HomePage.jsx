import React from 'react';
import { Plus } from 'lucide-react';
import { ItemList } from '../components/items/ItemList';
import { Loading } from '../components/common/Loading';
import { Button } from '../components/common/Button';

// pagina principal que muestra la lista de items y un boton para crear uno nuevo
export const HomePage = ({ items, loading, onEdit, onDelete, onNew }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Mis Items</h1>
        <Button
          variant="primary"
          icon={<Plus size={20} />}
          onClick={onNew}
        >
          Nuevo Item
        </Button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  );
};