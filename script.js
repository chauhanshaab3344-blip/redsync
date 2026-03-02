// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD-M1qJ4NDkb9_CTNjCg9afEj-VyD1Nugs",
  authDomain: "red-sync-2f00e.firebaseapp.com",
  projectId: "red-sync-2f00e",
  storageBucket: "red-sync-2f00e.firebasestorage.app",
  messagingSenderId: "449210595883",
  appId: "1:449210595883:web:866765e6211dd21790086e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGN UP
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account Created Successfully ✅");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// LOGIN
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful 🔥");
      window.location.href = "home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};