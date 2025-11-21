// src/App.js (tu archivo actual)

import React, { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { useItems } from './hooks/useItems';

function App() {
  const [screen, setScreen] = useState('list');
  const [editingItem, setEditingItem] = useState(null);
  const { items, loading, createItem, updateItem, deleteItem } = useItems();

  // Manejar la eliminacion de un item
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este item?')) {
      await deleteItem(id);
    }
  };

  // Abrir el form para editar un item existente
  const handleEdit = (item) => {
    setEditingItem(item);
    setScreen('form');
  };

  // Abrir el form para crear un nuevo item
  const handleNew = () => {
    setEditingItem(null);
    setScreen('form');
  };

  // Guardar un item (crear o actualizar)
  const handleSave = async (formData) => {
    if (editingItem) {
      await updateItem(editingItem.id, formData);
    } else {
      await createItem(formData);
    }
    setScreen('list');
    setEditingItem(null);
  };

  // Cancelar la edicion o creacion de un item
  const handleCancel = () => {
    setEditingItem(null);
    setScreen('list');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {screen === 'list' ? (
          <HomePage 
            items={items}
            loading={loading}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onNew={handleNew}
          />
        ) : (
          <FormPage
            item={editingItem}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

export default App;