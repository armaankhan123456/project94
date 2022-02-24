
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();