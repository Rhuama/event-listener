import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX2S17Xn7sF5C_1qKrBUZ57hgKY_kgqV0",
  authDomain: "event-listener-399919.firebaseapp.com",
  projectId: "event-listener-399919",
  storageBucket: "event-listener-399919.appspot.com",
  messagingSenderId: "639470113494",
  appId: "1:639470113494:web:e561f5cc21203ca0d56f77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);