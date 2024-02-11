// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZqKfTMsKeqmAtPcvDc-8x_Z9AFEqygs",
  authDomain: "doshare-ab09a.firebaseapp.com",
  projectId: "doshare-ab09a",
  storageBucket: "doshare-ab09a.appspot.com",
  messagingSenderId: "647829704749",
  appId: "1:647829704749:web:61fa56b74e101c44eaa8a4",
  measurementId: "G-QQFV0S5C8M"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage();
 const storageRef = ref(storage);
 const analytics = getAnalytics(app);
 const auth = getAuth(app)
 const database = getDatabase(app);

 export {auth,storageRef,database};
