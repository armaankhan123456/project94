// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCRtsPIhU3RTddDwan2a95xDuuv-ZSmmRU",
    authDomain: "kwitter-2f1e2.firebaseapp.com",
    databaseURL: "https://kwitter-2f1e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-2f1e2",
    storageBucket: "kwitter-2f1e2.appspot.com",
    messagingSenderId: "3321966293",
    appId: "1:3321966293:web:36b019fda9e885f4dc3c5c"
  };
  
  // Initialize Firebase
  firebase=initializeApp(firebaseConfig);
  function addUser()
  (
    
    user_name = document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
     purpose : "adding user"
    });
  )