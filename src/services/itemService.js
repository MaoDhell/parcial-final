import { 
  collection,      // referenciar una colección en Firestore
  getDocs,         // obtener múltiples documentos
  addDoc,          // agregar un nuevo documento
  updateDoc,       // actualizar un documento existente
  deleteDoc,       // eliminar un documento
  getDoc,          // obtener un documento específico
  doc,             // referenciar un documento específico
  serverTimestamp, // obtener la fecha/hora del servidor
  query,           // crear consultas
  orderBy          // ordenar resultados
} from 'firebase/firestore';

import { db } from '../config/firebase';  
import { STUDENT_ID, COLLECTIONS } from '../constants';  

export const itemService = {
// lee todos los items
  async getAll() {
    try {
      const q = query(
        collection(db, COLLECTIONS.ITEMS), 
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      }));
    } catch (error) {
      console.error('Error al obtener items:', error);
      throw error;
    }
  },

    // crea un nuevo item
   async create(data) {
    try {
      const docRef = await addDoc(collection(db, COLLECTIONS.ITEMS), {
        title: data.title,
        description: data.description || '',
        studentId: STUDENT_ID,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error al crear item:', error);
      throw error;
    }
  },

  // actualiza un item existente
  async update(id, data) {
    try {
      const docRef = doc(db, COLLECTIONS.ITEMS, id);

      const docSnap = await getDoc(docRef);
      
      if (!docSnap.exists()) {
        throw new Error(`El item con ID ${id} no existe`);
      }      

      await updateDoc(docRef, {
        title: data.title,
        description: data.description || '',
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error al actualizar item:', error);
      throw error;
    }
  },

   // elimina un item por ID
   async delete(id) {
    try {
      await deleteDoc(doc(db, COLLECTIONS.ITEMS, id));
    } catch (error) {
      console.error('Error al eliminar item:', error);
      throw error;
    }
  }
};