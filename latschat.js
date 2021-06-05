// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3atx36NDea8YSbN-hgc4DxGdht-WnWzo",
    authDomain: "lets-chat-3509b.firebaseapp.com",
    databaseURL: "https://lets-chat-3509b-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3509b",
    storageBucket: "lets-chat-3509b.appspot.com",
    messagingSenderId: "840397311852",
    appId: "1:840397311852:web:1dd23f53d3f7e074822d49"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.onload=function(){
player1n= localStorage.getItem("Name");
var dp = localStorage.getItem("Img");
console.log(dp);
var image = document.getElementById("imgdpicon");
image.src = dp;
document.getElementById("player1n").innerHTML=player1n;
var imgbgnew=localStorage.getItem("Imgbgnew");
console.log(imgbgnew);
if (imgbgnew=="https://offeo.com/learn/wp-content/uploads/2018/12/Pastel-1024x683.jpg"){
  document.body.style.backgroundImage="url('https://offeo.com/learn/wp-content/uploads/2018/12/Pastel-1024x683.jpg')";
}
else
{
  document.body.style.backgroundImage="url('https://image.freepik.com/free-vector/colourful-dark-wavy-background_23-2148392382.jpg')";
}
}

function addroom(){
  var roomname=document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomname).update({
    purpose:"adding room name"
   });
   localStorage.setItem("Room Name",roomname);
   window.location="letschat_page.html"
}

function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log(Room_names);
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+= row;
  //End code
  });});}
getData();

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("roomname",name);
 window.location="letschat_page.html";
}

