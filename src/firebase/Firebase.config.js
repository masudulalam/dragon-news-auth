// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtGBZRfIOCK-VGb9oyE0dV_fR48LInjY",
  authDomain: "dragon-news-e29cb.firebaseapp.com",
  projectId: "dragon-news-e29cb",
  storageBucket: "dragon-news-e29cb.firebasestorage.app",
  messagingSenderId: "106237443914",
  appId: "1:106237443914:web:2254fb3bcd753651a2cbb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;