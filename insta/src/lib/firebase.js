import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCF8fH5zaZ4jRFBw3wObla-X4NEhS723N8",
  authDomain: "instagram-18cb9.firebaseapp.com",
  projectId: "instagram-18cb9",
  storageBucket: "instagram-18cb9.appspot.com",
  messagingSenderId: "1073913327388",
  appId: "1:1073913327388:web:22340c153e291f96afd4d9",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
