// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBz3VzPzfFbUFItdtE0ALU9LiEnaNUrkwg",
    authDomain: "let-chat-web-app-caa71.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-caa71-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-caa71",
    storageBucket: "let-chat-web-app-caa71.appspot.com",
    messagingSenderId: "1018619826272",
    appId: "1:1018619826272:web:9e7bf613f5e9309c96b305"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // FIREBASE LINKS ADDED HERE //
   function logOut()
   {
}


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       //Start code
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}