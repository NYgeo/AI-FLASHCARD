// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvRqRqcWmYkSGo5uqtOCG5GQ8_Hzw-WAY",
  authDomain: "flashcardsaas-300b2.firebaseapp.com",
  projectId: "flashcardsaas-300b2",
  storageBucket: "flashcardsaas-300b2.appspot.com",
  messagingSenderId: "797664523681",
  appId: "1:797664523681:web:264c70566889ffe04487e0",
  measurementId: "G-1BR8R75KD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}