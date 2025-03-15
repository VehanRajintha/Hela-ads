import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-KCB4u2_mbhdL5DRN3m1wO7Y_oyCTKw",
  authDomain: "hela-ads.firebaseapp.com",
  projectId: "hela-ads",
  storageBucket: "hela-ads.firebasestorage.app",
  messagingSenderId: "934576146893",
  appId: "1:934576146893:web:118637aac170a79b97dc84",
  measurementId: "G-C1NJBM5PB0"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Analytics conditionally (only in browser)
const analytics = typeof window !== 'undefined' 
  ? isSupported().then(yes => yes ? getAnalytics(app) : null) 
  : null;

export { app, auth, googleProvider, analytics }; 