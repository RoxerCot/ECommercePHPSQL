import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1q91wGu7vKrqtpG6X8jEsiJ_FVuF7HPA",

  authDomain: "accesme-0420.firebaseapp.com",

  databaseURL: "https://accesme-0420.firebaseio.com",

  projectId: "accesme-0420",

  storageBucket: "accesme-0420.appspot.com",

  messagingSenderId: "84016031820",

  appId: "1:84016031820:web:0cd1ee26628019f41f6ce9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const login = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const register = ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
