
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAXZqKfTMsKeqmAtPcvDc-8x_Z9AFEqygs",
  authDomain: "doshare-ab09a.firebaseapp.com",
  projectId: "doshare-ab09a",
  storageBucket: "doshare-ab09a.appspot.com",
  messagingSenderId: "647829704749",
  appId: "1:647829704749:web:61fa56b74e101c44eaa8a4",
  measurementId: "G-QQFV0S5C8M"
};

// Initializing Firebase
 const app = initializeApp(firebaseConfig);
 const storage = getStorage();
 const storageRef = ref(storage);

 const auth = getAuth(app)
 const database = getDatabase(app);

 export {auth,storageRef,database};
