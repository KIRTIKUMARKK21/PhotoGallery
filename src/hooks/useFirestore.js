// import { collection } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/config';
import { collection, query, where,orderBy, getDocs ,onSnapshot} from "firebase/firestore";


const useFirestore = (col) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        const q = query(collection(projectFirestore, "images"),orderBy('createdAt','desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            //   documents.push(doc.data());
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
        });
        return () =>unsubscribe();

    }, [col])


    return { docs };
}

export default useFirestore;

