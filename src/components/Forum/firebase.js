import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEPlovccCgKwUL56hC_ACrtHYrPJ6GIuY",
  authDomain: "user-comments-97564.firebaseapp.com",
  databaseURL:
    "https://user-comments-97564-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "user-comments-97564",
  storageBucket: "user-comments-97564.appspot.com",
  messagingSenderId: "878695487182",
  appId: "1:878695487182:web:75d7361a1584711c85229f",
  measurementId: "G-3CDPBYM771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

export { db };
