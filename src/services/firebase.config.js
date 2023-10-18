import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVuqPebxbAeV3pxPLCFCdsONJ1H-TntdQ",
  authDomain: "app-monitoramento-6be7e.firebaseapp.com",
  projectId: "app-monitoramento-6be7e",
  storageBucket: "app-monitoramento-6be7e.appspot.com",
  messagingSenderId: "385977426746",
  appId: "1:385977426746:web:47583a8635c8d69fbde603",
  measurementId: "G-4CNV2L164C"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//const analytics = isSupported(getAnalytics(app)); 