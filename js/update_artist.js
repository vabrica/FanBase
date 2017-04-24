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
function pushArtists()
{
	
	var user = firebase.auth().currentUser;
	var uid = user.uid;
	alert("PUSH Artists UPDATE uid = " + uid);

	var artistName = document.getElementById("name").value;
	var taxNumber = document.getElementById("tax-number").value;
	var dateCreation = document.getElementById("date-creation").value;
	var aboutArtist = document.getElementById("about").value;
	var postalAddress = document.getElementById("address").value;
	var mainContact = document.getElementById("contact-1").value;
	var secContact = document.getElementById("contact-2").value;
	var mainEmail = document.getElementById("email-1").value;
	var secEmail = document.getElementById("email-2").value;
	var bankAccount = document.getElementById("bank-account").value;
	var iban = document.getElementById("iban").value;
	var bicSwift = document.getElementById("bic-swift").value;
	var photoId = document.getElementById("photo-id").value;
	var proofAddress = document.getElementById("proof-address").value;
	var proofRegistration = document.getElementById("proof-registration").value;


	var mydata = database.ref('/Artists/' + uid);  // creates ref at Fans
	var postRef = mydata.update({'artistName':artistName,'taxNumber':taxNumber,'dateCreation':dateCreation, 'aboutArtist': aboutArtist,'postalAddress':postalAddress,'mainContact':mainContact, 'secContact': secContact,'mainEmail':mainEmail,'secEmail':secEmail, 'bankAccount': bankAccount,'iban':iban,'bicSwift':bicSwift, 'photoId': photoId,'proofAddress':proofAddress,'proofRegistration':proofRegistration}); // adds UID as unique key then the following child nodes


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

  	}

  	);

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

  	}

  	);

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

  	}

  	);

});  



      firebase.auth().onAuthStateChanged(function(user) {
      	if (user) {
    // User is signed in.
    alert("User is signed in");
    var uid = user.uid;
    alert("uid = " + uid);
    
    var mydata = database.ref();

    mydata.child('Artists').on('value', 
    	function(snapshot) 
    	{
    		
    	var artistName = snapshot.child(uid + "/artistName").val(); // can be UID instead off push
    	var taxNumber = snapshot.child(uid + "/taxNumber").val();
    	var dateCreation = snapshot.child(uid + "/dateCreation").val();
    	var aboutArtist = snapshot.child(uid + "/aboutArtist").val();
    	var postalAddress = snapshot.child(uid + "/postalAddress").val();
    	var mainContact = snapshot.child(uid + "/mainContact").val();
    	var secContact = snapshot.child(uid + "/secContact").val();
    	var mainEmail = snapshot.child(uid + "/mainEmail").val();
    	var secEmail = snapshot.child(uid + "/secEmail").val();
    	var bankAccount = snapshot.child(uid + "/bankAccount").val();
    	var iban = snapshot.child(uid + "/iban").val();
    	var bicSwift = snapshot.child(uid + "/bicSwift").val();
    	var photoId = snapshot.child(uid + "/photoId").val();
    	var proofAddress = snapshot.child(uid + "/proofAddress").val();
    	var proofRegistration = snapshot.child(uid + "/proofRegistration").val();
    	
    	alert("artistName snapshot " + artistName);
    	alert("taxNumber snapshot " + taxNumber);
    	
    	document.getElementById("name").value=artistName;
    	document.getElementById("tax-number").value=taxNumber;
    	document.getElementById("date-creation").value=dateCreation;
    	document.getElementById("about").innerHTML=aboutArtist;
    	document.getElementById("address").value=postalAddress;
    	document.getElementById("contact-1").value=mainContact;
    	document.getElementById("contact-2").value=secContact;
    	document.getElementById("email-1").value=mainEmail;
    	document.getElementById("email-2").value=secEmail;
    	document.getElementById("bank-account").value=bankAccount;
    	document.getElementById("iban").value=iban;
    	document.getElementById("bic-swift").value=bicSwift;
    	document.getElementById("photo-id").value=photoId;
    	document.getElementById("proof-address").value=proofAddress;
    	document.getElementById("proof-registration").value=proofRegistration;
    	
    	document.getElementById("nameHeader").innerHTML=" " + artistName + " Details";
    	
    }
    );
    
  } else {
    // No user is signed in.
    alert("No user signed in");
  }
});
