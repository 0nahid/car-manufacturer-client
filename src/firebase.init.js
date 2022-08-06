// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyAN4PORTDecc5LNUwF_opcp3dcLMZWslm8",
    authDomain: "car-parts-bangladesh.firebaseapp.com",
    projectId: "car-parts-bangladesh",
    storageBucket: "car-parts-bangladesh.appspot.com",
    messagingSenderId: "448862367299",
    appId: "1:448862367299:web:fba6256936fcbd8681eef6",
    measurementId: "G-T3JJSTNSHQ"
};

// Initialize e
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;