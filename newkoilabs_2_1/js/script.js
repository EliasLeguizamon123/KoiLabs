console.log('Hola mundo');
var firebaseConfig = {
  apiKey: "AIzaSyDZzfhyVb7SJK6nfJVSYa5juCKSu7iIpuY",
  authDomain: "koilabs-a8148.firebaseapp.com",
  databaseURL: "https://koilabs-a8148.firebaseio.com",
  projectId: "koilabs-a8148",
  storageBucket: "gs://koilabs-a8148.appspot.com/",
  messagingSenderId: "85159352790",
  appId: "1:85159352790:web:e6ab00ee5171ef2d822c77",
  measurementId: "G-5WTMPV32QD"
};
function enviar(){
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  //alert('Email = '+email+' Password = '+pass);
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
  alert('Usuario creado correctamente');
  //location.href="index.html"
}
