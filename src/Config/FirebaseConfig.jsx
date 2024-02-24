// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALAz7qGcE3AJ33OnmiVjzJeXFfWL6MCms",
    authDomain: "react-auth-63d09.firebaseapp.com",
    databaseURL: "https://react-auth-63d09-default-rtdb.firebaseio.com",
    projectId: "react-auth-63d09",
    storageBucket: "react-auth-63d09.appspot.com",
    messagingSenderId: "835817879173",
    appId: "1:835817879173:web:8a3d48af031d5d72f35bec"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseapp)

export {firebaseConfig,auth}