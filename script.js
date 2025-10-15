import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyANC5GGhPk67G8kKbeBQv2T11A-5_bIXOs",
  authDomain: "xpensemgr-526a4.firebaseapp.com",
  databaseURL: "https://xpensemgr-526a4-default-rtdb.firebaseio.com", // ✅ Corrected URL
  projectId: "xpensemgr-526a4",
  storageBucket: "xpensemgr-526a4.appspot.com",
  messagingSenderId: "274547126267",
  appId: "1:274547126267:web:1b68acc62d558e534ea55e"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Handle Form Submission
document.getElementById("msgForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("message").value.trim();

  if (msg) {
    push(ref(db, "msgdrop/messages"), { text: msg }) // ✅ Scoped path for viewer.html
      .then(() => {
        document.getElementById("status").textContent = "✅ Message submitted!";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.error("Error submitting message:", error);
        document.getElementById("status").textContent = "❌ Submission failed.";
      });
  } else {
    document.getElementById("status").textContent = "⚠️ Please enter a message.";
  }
});
