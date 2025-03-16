import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIAiftAvBp_Qv4XYeJZyH68linc_AVgXc",
  authDomain: "sklbz-web.firebaseapp.com",
  projectId: "sklbz-web",
  storageBucket: "sklbz-web.appspot.com",
  messagingSenderId: "1011173713489",
  appId: "1:1011173713489:web:b3a194cd0bd0f0c18afa70",
  measurementId: "G-T5S5PSZ9JL"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("hello");