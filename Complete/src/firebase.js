
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsGVzv5jwqQG51LO9AGnd3QKRtUKFmER0",
  authDomain: "econest-2e874.firebaseapp.com",
  projectId: "econest-2e874",
  storageBucket: "econest-2e874.appspot.com",
  messagingSenderId: "422740408705",
  appId: "1:422740408705:web:7251f39309af149de41080",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
