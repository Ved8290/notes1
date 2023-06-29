const firebaseConfig = {
    apiKey: "AIzaSyCHPiWo28mcgmDwmSQ7OaDNKvLb3w6_DBc",
    authDomain: "notes-user.firebaseapp.com",
    projectId: "notes-user",
    storageBucket: "notes-user.appspot.com",
    messagingSenderId: "1065283327239",
    appId: "1:1065283327239:web:f78f42e7832df43f65a1a2"
  };
  
  import { initializeApp  } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import {  getAuth,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
  //const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
     
      // ...
    } else {
        alert("without Login you cannot Download Notes")
      location.replace("index.html")
    }
  });