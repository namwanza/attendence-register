import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDAG1RvwN85zACzAXG7qVG76avN6cTV5uo",
  authDomain: "taibah-ef8a9.firebaseapp.com",
  databaseURL: "https://taibah-ef8a9.firebaseio.com",
  projectId: "taibah-ef8a9",
  storageBucket: "taibah-ef8a9.appspot.com",
  messagingSenderId: "818871054377",
  appId: "1:818871054377:web:ff5bd40205df0897c8ac38",
  measurementId: "G-SQ5NYJD1CM"
});

export default app;
export const auth = firebase.auth();