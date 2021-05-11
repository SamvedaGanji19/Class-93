var firebaseConfig = {
      apiKey: "AIzaSyCF0vL12bsG5d4iEZknUgQcXaB-7k0jD60",
      authDomain: "kwitter-fc031.firebaseapp.com",
      databaseURL: "https://kwitter-fc031-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc031",
      storageBucket: "kwitter-fc031.appspot.com",
      messagingSenderId: "1034935428055",
      appId: "1:1034935428055:web:bc9709c262cba8aa6a2192"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
function addRoom() { room_name = document.getElementById("room_name").value; 
firebase.database().ref("/").child(room_name).update({ 
purpose : "adding room name" });
localStorage.setItem("room_name", room_name);
 window.location = "kwitter_page.html"; 
} 
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name - " + Room_names); 
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; }); 
}); 
} 
getData();
function redirectToRoomName(name) 
{ console.log(name); 
localStorage.setItem("room_name", name); 
window.location = "kwitter_page.html"; }

function logout(){

  localStorage.removeItem(user_name);
   localStorage.removeItem(room_name);
   window.location="index.html";
}