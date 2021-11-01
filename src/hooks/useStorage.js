import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
// import { ref, uploadBytes, uploadTask } from "firebase/storage";
import {ref, uploadBytesResumable, uploadTask,getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore"; 
import { collection, doc, setDoc,serverTimestamp  } from "firebase/firestore"; 




const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState();

  useEffect(() => {

    const storageRef = ref(projectStorage, file.name);
    const collectionRef=doc(collection(projectFirestore,'images'));
    // const newCityRef = doc(collection(db, "cities"));
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        let percentage  = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, (err)=>{
        setError(err);
      }, () =>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
          const createdAt = serverTimestamp()
          const data={downloadURL,createdAt};
          setDoc(collectionRef, data);
        });

      })
  }, [file]);

  return {progress,url,error};

}

export default useStorage;
