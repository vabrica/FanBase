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
	function pushFans()
	{
		
		var user = firebase.auth().currentUser;
		var uid = user.uid;
		// alert("PUSH Fans UPDATE uid = " + uid);

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


		var mydata = database.ref('/Fans/' + uid);  // creates ref at Fans
		var postRef = mydata.update({'firstName':firstName,'surname':surname,'dob':dob, 'addressLine1': addressLine1,'addressLine2':addressLine2,'addressLine3':addressLine3, 'creditCard': creditCard,'expiryDate':expiryDate,'cvn':cvn, 'photoId': photoId,'proofAddress':proofAddress}); // adds UID as unique key then the following child nodes
		
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

  	}

  	);

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

  	}

  	);

});



		  firebase.auth().onAuthStateChanged(function(user) {
		  	if (user) {
    // User is signed in.
    alert("User is signed in");
    var uid = user.uid;
    // alert("uid = " + uid);
    
    var mydata = database.ref();

    mydata.child('Fans').on('value', 
    	function(snapshot) 
    	{
    		
    	var firstName = snapshot.child(uid + "/firstName").val(); // can be UID instead off push
    	var surname = snapshot.child(uid + "/surname").val();
    	var dob = snapshot.child(uid + "/dob").val();
    	var addressLine1 = snapshot.child(uid + "/addressLine1").val();
    	var addressLine2 = snapshot.child(uid + "/addressLine2").val();
    	var addressLine3 = snapshot.child(uid + "/addressLine3").val();
    	var creditCard = snapshot.child(uid + "/creditCard").val();
    	var expiryDate = snapshot.child(uid + "/expiryDate").val();
    	var cvn = snapshot.child(uid + "/cvn").val();
    	var photoId = snapshot.child(uid + "/photoId").val();
    	var proofAddress = snapshot.child(uid + "/proofAddress").val();
    	
    	// alert("firstName snapshot " + firstName);
    	// alert("surname snapshot " + surname);
    	
    	document.getElementById("Fname").value=firstName;
    	document.getElementById("Surname").value=surname;
    	document.getElementById("DOB").value=dob;
    	document.getElementById("address1").value=addressLine1;
    	document.getElementById("address2").value=addressLine2;
    	document.getElementById("address3").value=addressLine3;
    	document.getElementById("credit-card").value=creditCard;
    	document.getElementById("expiryDate").value=expiryDate;
    	document.getElementById("cvn").value=cvn;
    	document.getElementById("photo-id").value=photoId;
    	document.getElementById("proof-address").value=proofAddress;
    	
    	document.getElementById("nameHeader").innerHTML=" " + firstName + " " + surname + " Details";
    	

    }
    );
    
} else {
    // No user is signed in.
    alert("No user signed in");
}
});


		  




		  
