// src/services/authService.jsx
import { 
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword // <-- IMPORT THIS from Firebase
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// This function performs the token exchange with our backend
const loginToBackend = async (firebaseUser) => {
  const idToken = await firebaseUser.getIdToken();
  const response = await axios.post(`${API_URL}/api/auth/firebase-login`, {
    id_token: idToken,
  });
  return response.data.access_token;
};

// --- FUNCTIONS YOU ALREADY HAVE ---
export const loginWithGoogle = async () => {
  // ... (implementation)
};

export const loginWithEmail = async (email, password) => {
  // ... (implementation)
};

// --- ADD THIS NEW FUNCTION ---
export const registerWithEmail = async (email, password) => {
  // 1. Create the user in Firebase
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  // 2. Immediately log them into our backend to get our app's JWT
  return await loginToBackend(userCred.user);
};