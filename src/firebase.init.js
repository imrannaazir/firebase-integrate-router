// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY1d4-JpvUsUAmFW45HW94P6nrXRWzGwA",
    authDomain: "router-integrate-firebase.firebaseapp.com",
    projectId: "router-integrate-firebase",
    storageBucket: "router-integrate-firebase.appspot.com",
    messagingSenderId: "862763316405",
    appId: "1:862763316405:web:740dfae8cf212bc23ebafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app