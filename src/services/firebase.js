import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdAn215Q9s3ixPe3bnprc8Ag1OTA5wSr8",
  authDomain: "products-incube.firebaseapp.com",
  projectId: "products-incube",
  storageBucket: "products-incube.appspot.com",
  messagingSenderId: "561237625721",
  appId: "1:561237625721:web:17580691b5a4024813fda8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
