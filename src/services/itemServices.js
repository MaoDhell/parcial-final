import { 
  collection,      // referenciar una colección en Firestore
  getDocs,         // obtener múltiples documentos
  addDoc,          // agregar un nuevo documento
  updateDoc,       // actualizar un documento existente
  deleteDoc,       // eliminar un documento
  doc,             // referenciar un documento específico
  serverTimestamp, // obtener la fecha/hora del servidor
  query,           // crear consultas
  orderBy          // ordenar resultados
} from 'firebase/firestore';

import { db } from '../config/firebase';  
import { STUDENT_ID, COLLECTIONS } from '../constants';  // Constantes

