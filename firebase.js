
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAt3pMVtotyYVdS8jZ0hnmGxUH8FVjl91U",
  authDomain: "web-app-210b3.firebaseapp.com",
  projectId: "web-app-210b3",
  storageBucket: "web-app-210b3.firebasestorage.app",
  messagingSenderId: "354418763892",
  appId: "1:354418763892:web:e311978deece8a04d64921",
  measurementId: "G-QDWP4MM4V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  
    



