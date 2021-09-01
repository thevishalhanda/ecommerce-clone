import firebase  from "firebase/app";

import "firebase/auth";


var firebaseConfig = {

    apiKey: "AIzaSyCIYosHQvNimgP5NFv0BYEMEt47CKFAkRk",

    authDomain: "ecommerce-3be3f.firebaseapp.com",

    projectId: "ecommerce-3be3f",

    storageBucket: "ecommerce-3be3f.appspot.com",

    messagingSenderId: "649521819690",

    appId: "1:649521819690:web:bfc3972da0c915e95e9353",

    measurementId: "G-VE2L8NJCBC"

  };

  // Initialize Firebase

export const app =   firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

