import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
 


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB5svX-XmGOcLOhmzH8Kfx7JPCFEiS4N-8",
//   authDomain: "react-blog-app-a5bc9.firebaseapp.com",
//   projectId: "react-blog-app-a5bc9",
//   storageBucket: "react-blog-app-a5bc9.appspot.com",
//   messagingSenderId: "62354052112",
//   appId: "1:62354052112:web:84d08b7ff21600c7afa695"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {auth, db, storage}