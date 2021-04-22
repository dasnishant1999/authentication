import firebase from "firebase/app";

import "firebase/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAXhkwOtmU_wttmnxeEa1gh9C9UIs56WE",
  authDomain: "authentication-5f256.firebaseapp.com",
  projectId: "authentication-5f256",
  storageBucket: "authentication-5f256.appspot.com",
  messagingSenderId: "948197483586",
  appId: "1:948197483586:web:ffeede08d4373ce48ff9db",
});

export const auth = firebase.auth();

export default firebaseApp;
