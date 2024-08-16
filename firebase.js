import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDaPKWBXmg4qodEetrv6cuNwMMBMW4KW4",
  authDomain: "flashcard-saas-e70f4.firebaseapp.com",
  projectId: "flashcard-saas-e70f4",
  storageBucket: "flashcard-saas-e70f4.appspot.com",
  messagingSenderId: "996786752379",
  appId: "1:996786752379:web:e71543e71473fb4bd40bde",
  measurementId: "G-BPDJ8C1MRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}