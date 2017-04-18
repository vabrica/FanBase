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
function pushFans(){

	var firstName = document.getElementById("Fname").value;
	var surname = document.getElementById("Surname").value;
	var dob = document.getElementById("DOB").value;
	var addressLine1 = document.getElementById("address1").value;
	var addressLine2 = document.getElementById("address2").value;
	var addressLine3 = document.getElementById("address3").value;
	var creditCard = document.getElementById("credit-card").value;
	var expiryDate = document.getElementById("expiryDate").value;
	var cvn = document.getElementById("cvn").value;
	var photoId = document.getElementById("photo-id").value;
	var proofAddress = document.getElementById("proof-address").value;


	var mydata = database.ref('/Fans/');  // creates ref at Fans
	var postRef = mydata.push({'firstName':firstName,'surname':surname,'dob':dob, 'addressLine1': addressLine1,'addressLine2':addressLine2,'addressLine3':addressLine3, 'creditCard': creditCard,'expiryDate':expiryDate,'cvn':cvn, 'photoId': photoId,'proofAddress':proofAddress, 'valid': "false"}); // adds unique key then the following child nodes
	var postID = postRef.key;  // saves unique key from above

	console.log(postID); // posts unique key to console so it can be checked

	$('#myModal').modal('show')
}

var photoFile = document.getElementById("photo-id");
var addressFile = document.getElementById("proof-address");

//Listen for file selection
photoFile.addEventListener('change', function(e) {

//Get File
var file=e.target.files[0];
//Create a storage reference
var storageRef = firebase.storage().ref('test_files_Fans/' + file.name);
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
var storageRef = firebase.storage().ref('test_files_Fans/' + file.name);
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
