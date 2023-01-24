var firebaseConfig = {
    apiKey: "AIzaSyCUbvuq2VDtdSUCvoOaNRQoUdq37Cord-U",
    authDomain: "classtest-dabf4.firebaseapp.com",
    databaseURL: "https://classtest-dabf4-default-rtdb.firebaseio.com",
    projectId: "classtest-dabf4",
    storageBucket: "classtest-dabf4.appspot.com",
    messagingSenderId: "213270467649",
    appId: "1:213270467649:web:3ac48c835f3f12ea4ae2c0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("username_input");
   document.getElementById("username_input").innerHTML = "Welcome " + username_input + "!";

   function addroom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html"; 
   }

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' > # " + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();

function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
}