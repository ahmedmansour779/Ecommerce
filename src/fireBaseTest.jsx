// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVMXQ7PCmmHOx00Nv_ah2x1wwFZNZ4juY",
    authDomain: "ecommerce-4fb79.firebaseapp.com",
    projectId: "ecommerce-4fb79",
    storageBucket: "ecommerce-4fb79.appspot.com",
    messagingSenderId: "305641934507",
    appId: "1:305641934507:web:189c2e0d05b37631bdb1ee",
    measurementId: "G-2Y3NW214P3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// TODO: npm install -g firebase-tools
// TODO: firebase login
// TODO: firebase init
// TODO: firebase deploy

