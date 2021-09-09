import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rt-MIeR032vqfIQ6NWaToduNGLx9d4Q",
  authDomain: "cosee-image-gallery.firebaseapp.com",
  projectId: "cosee-image-gallery",
  storageBucket: "cosee-image-gallery.appspot.com",
  messagingSenderId: "638213779415",
  appId: "1:638213779415:web:430e261566eb2a9a036592",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
