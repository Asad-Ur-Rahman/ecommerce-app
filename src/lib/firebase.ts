import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAYW_TLGuVPdgAVFTluTns9z5fRjeUnrPk",
    authDomain: "ecommerce-app-f7120.firebaseapp.com",
    projectId: "ecommerce-app-f7120",
    storageBucket: "ecommerce-app-f7120.appspot.com",
    messagingSenderId: "84691515862",
    appId: "1:84691515862:web:2c1e318e75a260f0bb4c77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();