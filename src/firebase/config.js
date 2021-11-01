
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getStorage, ref } from "firebase/storage";

 const firebaseConfig = {
    apiKey: "AIzaSyBgvM6eas2v4hHbFtE8vNu2chAM_-p_X4w",
    authDomain: "photogallery-639d4.firebaseapp.com",
    projectId: "photogallery-639d4",
    storageBucket: "photogallery-639d4.appspot.com",
    messagingSenderId: "520318485861",
    appId: "1:520318485861:web:cc37324e545ea89036cd8c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore};