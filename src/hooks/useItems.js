import { useState, useEffect } from 'react';
import { itemService } from '../services/itemService';

export const useItems = () => {
  const [items, setItems] = useState([]);    // Lista de ítems
  const [loading, setLoading] = useState(false);    // esta cargado?
  const [error, setError] = useState(null);    // hay algun error?

  // Creamos estas funciones para manejar las operaciones CRUD y que la UI está sincronizada con Firestore
  const loadItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await itemService.getAll();
      setItems(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (data) => {
    try {
      await itemService.create(data);
      await loadItems();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateItem = async (id, data) => {
    try {
      await itemService.update(id, data);
      await loadItems();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteItem = async (id) => {
    try {
      await itemService.delete(id);
      await loadItems();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return {
    items,
    loading,
    error,
    createItem,
    updateItem,
    deleteItem,
    refreshItems: loadItems
  };
};