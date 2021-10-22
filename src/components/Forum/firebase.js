import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  // First db

  // apiKey: "AIzaSyCEPlovccCgKwUL56hC_ACrtHYrPJ6GIuY",
  // authDomain: "user-comments-97564.firebaseapp.com",
  // databaseURL:
  //   "https://user-comments-97564-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "user-comments-97564",
  // storageBucket: "user-comments-97564.appspot.com",
  // messagingSenderId: "878695487182",
  // appId: "1:878695487182:web:75d7361a1584711c85229f",
  // measurementId: "G-3CDPBYM771",

  //2nd db

  // apiKey: "AIzaSyDrknjhc9fMP5kdYDrB2d2Fywo5UEpLee8",
  // authDomain: "besquare-forum-hack.firebaseapp.com",
  // projectId: "besquare-forum-hack",
  // storageBucket: "besquare-forum-hack.appspot.com",
  // messagingSenderId: "788590550442",
  // appId: "1:788590550442:web:52cdc25272834724a49fd3",
  // measurementId: "G-K4K5Y5SQVQ",

  apiKey: "AIzaSyBuOUk49h5q-tSNRacCN3kgGYCOndPOueM",
  authDomain: "hackathon-6811b.firebaseapp.com",
  projectId: "hackathon-6811b",
  storageBucket: "hackathon-6811b.appspot.com",
  messagingSenderId: "360048715094",
  appId: "1:360048715094:web:23f3e1cc4fc7c8efb222f7",
  measurementId: "G-JWN716QP8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const auth = firebase.auth();
// const firestore = firebase.firestore();

export { db };
