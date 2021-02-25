import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCfAqpQXaeedbjnBOcpRyuVgxD3az68M00",
    authDomain: "tutorial-72d03.firebaseapp.com",
    databaseURL: "https://tutorial-72d03-default-rtdb.firebaseio.com",
    projectId: "tutorial-72d03",
    storageBucket: "tutorial-72d03.appspot.com",
    messagingSenderId: "882796868542",
    appId: "1:882796868542:web:c974013beac144bb9abfef"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };