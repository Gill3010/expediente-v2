// src/backend/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACySoHCJF7fKKU03sZIPf6kXkgKyeynMI",
  authDomain: "innova-proyectos.firebaseapp.com",
  databaseURL: "https://innova-proyectos-default-rtdb.firebaseio.com", // <--- aquí va la URL
  projectId: "innova-proyectos",
  storageBucket: "innova-proyectos.firebasestorage.app",
  messagingSenderId: "36330418873",
  appId: "1:36330418873:web:6a922131f9e9dffbad6168",
  measurementId: "G-70HKXEGGDN"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

