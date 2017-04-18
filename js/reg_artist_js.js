// Initialize Firebase
var config = {
  apiKey: "AIzaSyBp7xXz6I76P6scEaSo6fRIyp_HKxrQE2U",
  authDomain: "fanbase-47b85.firebaseapp.com",
  databaseURL: "https://fanbase-47b85.firebaseio.com",
  storageBucket: "fanbase-47b85.appspot.com",
  messagingSenderId: "1028942516030"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
  
// pushing info into firebase
function pushArtists(){
  var artistName = document.getElementById("name").value;
  var taxNumber = document.getElementById("tax-number").value;
  var dateCreation = document.getElementById("date-creation").value;
  var aboutArtist = document.getElementById("about").value;
  var postalAddress = document.getElementById("address").value;
  var mainContact = document.getElementById("contact-1").value;
  var secContact = document.getElementById("contact-2").value;
  var mainEmail = document.getElementById("email-1").value;
  var secEmail = document.getElementById("contact-2").value;
  var bankAccount = document.getElementById("bank-account").value;
  var iban = document.getElementById("iban").value;
  var bicSwift = document.getElementById("bic-swift").value;
  var photoId = document.getElementById("photo-id").value;
  var proofAddress = document.getElementById("proof-address").value;
  var proofRegistration = document.getElementById("proof-registration").value;


  var mydata = database.ref('/Artists/');  // creates ref at Fans
  var postRef = mydata.push({'artistName':artistName,'taxNumber':taxNumber,'dateCreation':dateCreation, 'aboutArtist': aboutArtist,'postalAddress':postalAddress,'mainContact':mainContact, 'secContact': secContact,'mainEmail':mainEmail,'secEmail':secEmail, 'bankAccount': bankAccount,'iban':iban,'bicSwift':bicSwift, 'photoId': photoId,'proofAddress':proofAddress,'proofRegistration':proofRegistration, 'valid': "false"}); // adds unique key then the following child nodes
  var postID = postRef.key;  // saves unique key from above

  console.log(postID); // posts unique key to console so it can be checked

  $('#myModal').modal('show')
}

var photoFile = document.getElementById("photo-id");
var addressFile = document.getElementById("proof-address");
var registrationFile = document.getElementById("proof-registration");

//Listen for file selection
photoFile.addEventListener('change', function(e) {

//Get File
var file=e.target.files[0];
//Create a storage reference
var storageRef = firebase.storage().ref('test_files_Artists/' + file.name);
//Upload File
var task = storageRef.put(file);

//Update Progress Bar
task.on('state_changed', 

function progress(snapshot) {
  
  var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
  uploader.value = percentage;

},   

function error (err) {

},
   
function complete() {

});

});  

addressFile.addEventListener('change', function(e) {

//Get File
var file=e.target.files[0];
//Create a storage reference
var storageRef = firebase.storage().ref('test_files_Artists/' + file.name);
//Upload File
var task = storageRef.put(file);

//Update Progress Bar
task.on('state_changed', 


function progress(snapshot) {

  var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
  uploader.value = percentage;

},
    
function error (err) {

},

function complete() {

});

});  


registrationFile.addEventListener('change', function(e) {

//Get File
var file=e.target.files[0];
//Create a storage reference
var storageRef = firebase.storage().ref('test_files_Artists/' + file.name);
//Upload File
var task = storageRef.put(file);

//Update Progress Bar
task.on('state_changed', 

function progress(snapshot) {

  var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
  uploader.value = percentage;
},
    
function error (err) {

},


function complete() {

});

});  
