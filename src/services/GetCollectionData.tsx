// firestoreService.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

/**
 * Busca todos os documentos de uma coleção
 * @param {string} collectionName Nome da coleção (ex: 'projetos', 'usuarios')
 * @returns {Promise<Array>} Lista de documentos com id e dados
 */
const GetCollectionData = async (collectionName: string) => {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);

  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return data;
};

export default GetCollectionData;
