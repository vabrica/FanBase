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

    	//document.getElementById("Fname").value=firstName;
		//document.getElementById("Surname").value=surname;
		//document.getElementById("DOB").value=dob;
		//document.getElementById("address1").value=addressLine1;
		//document.getElementById("address2").value=addressLine2;
		//document.getElementById("address3").value=addressLine3;
		//document.getElementById("credit-card").value=creditCard;
		//document.getElementById("expiryDate").value=expiryDate;
		//document.getElementById("cvn").value=cvn;
		//document.getElementById("photo-id").value=photoId;
		//document.getElementById("proof-address").value=proofAddress;
		
		//check 
		if(firstName == null){
			alert("You must be signed in as a Fan to view this profile")
			window.location = 'index.html';
		}

		document.getElementById("nameHeader").innerHTML="Welcome " + firstName + " " + surname;
		

	}
	);
	
} else {
    // No user is signed in.
    alert("You must be signed in to view your profile");

	//code to send back to homepage
	window.location = 'login_registration.html';
}
});








