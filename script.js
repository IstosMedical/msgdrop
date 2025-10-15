import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyANC5GGhPk67G8kKbeBQv2T11A-5_bIXOs",
  authDomain: "xpensemgr-526a4.firebaseapp.com",
  databaseURL: "https://console.firebase.google.com/u/0/project/xpensemgr-526a4/database/xpensemgr-526a4-default-rtdb/data/~2F",
  projectId: "xpensemgr-526a4",
  storageBucket: "xpensemgr-526a4.firebasestorage.app",
  messagingSenderId: "274547126267",
  appId: "1:274547126267:web:1b68acc62d558e534ea55e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("msgForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const msg = document.getElementById("message").value;
  push(ref(db, "messages"), { text: msg });
  document.getElementById("status").textContent = "Message submitted!";
});
