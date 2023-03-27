import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    let ref = collection(db, collectionName);
    const unsubscribe = onSnapshot(ref, (snaphot) => {
      let results = [];
      snaphot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => {
      unsubscribe();
    };
  }, [collectionName]);
  return { documents };
};
