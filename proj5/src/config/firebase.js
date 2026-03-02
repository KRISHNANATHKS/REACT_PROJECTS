// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7g35boM6l7g4eGLlhQjWzblBzSbrfayo",
  authDomain: "vite-contact-98f49.firebaseapp.com",
  projectId: "vite-contact-98f49",
  storageBucket: "vite-contact-98f49.firebasestorage.app",
  messagingSenderId: "48606021149",
  appId: "1:48606021149:web:184093c18d0de502f3e8f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);