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

//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name"); 

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name=message_data['Name'];
Message=message_data['Message'];
like=message_data['like'];
name_with_tag="<h4>"+ Name + "<img class='user_tick' src='tick.png' ></h4>";
Message_with_tag="<h4 class='message_h4'>" + Message +"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";

row=name_with_tag + Message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button - " +message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_Likes=Number(likes) +1;
      console.log(updated_Likes);

      firebase.database().ref(room_name).child(message_id).update({
            like :updated_Likes
      });

     
}

function logout(){

      localStorage.removeItem(user_name);
       localStorage.removeItem(room_name);
       window.location="index.html";
    }