// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA59f64KO2EJLe1cOMouslCtt_YrrXFo5I",
    authDomain: "plumbtion-manufacturer.firebaseapp.com",
    projectId: "plumbtion-manufacturer",
    storageBucket: "plumbtion-manufacturer.appspot.com",
    messagingSenderId: "466988472020",
    appId: "1:466988472020:web:f6518989523f0518218d41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;