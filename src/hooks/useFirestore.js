import { useState } from "react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { addDoc,} from "firebase/firestore";
import { db, timestamp } from "../firebase/config"

export default function useFirestore(dataBase) {
  const [error, setError] = useState(null);

  // collection ref
  const ref = collection(db, dataBase);

  // add a document
  const addDocument = async (doc) => {
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });
      return addedDocument
    } catch (err) {
      setError(err.message);
    }
  };
  //update a document
  const updateDocument = async (id, updates) => {
    try {
      const updatedDocument = await updateDoc(doc(db, dataBase, id), updates);

      return updatedDocument;
    } catch (err) {
      setError(err.message);
    }
  };

  return { addDocument, updateDocument };
}
