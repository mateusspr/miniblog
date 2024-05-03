import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAi9Sf0wBlvxtnMznsizNW-0C26Vl57ta0",
    authDomain: "miniblog-3b760.firebaseapp.com",
    projectId: "miniblog-3b760",
    storageBucket: "miniblog-3b760.appspot.com",
    messagingSenderId: "148145136803",
    appId: "1:148145136803:web:acc1dc6401ec4699994b16"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };