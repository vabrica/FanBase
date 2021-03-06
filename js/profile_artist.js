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
    // alert("User is signed in");
    var uid = user.uid;
    // alert("uid = " + uid);
    
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
    	
    	// alert("artistName snapshot " + artistName);
    	//alert("taxNumber snapshot " + taxNumber);
    	
    	// document.getElementById("name").value=artistName;
    	// document.getElementById("tax-number").value=taxNumber;
    	// document.getElementById("date-creation").value=dateCreation;
    	// document.getElementById("about").innerHTML=aboutArtist;
    	// document.getElementById("address").value=postalAddress;
    	// document.getElementById("contact-1").value=mainContact;
    	// document.getElementById("contact-2").value=secContact;
    	// document.getElementById("email-1").value=mainEmail;
    	// document.getElementById("email-2").value=secEmail;
    	// document.getElementById("bank-account").value=bankAccount;
    	// document.getElementById("iban").value=iban;
    	// document.getElementById("bic-swift").value=bicSwift;
    	// document.getElementById("photo-id").value=photoId;
    	// document.getElementById("proof-address").value=proofAddress;
    	// document.getElementById("proof-registration").value=proofRegistration;
    	
    	//check
        if(artistName == null){
            alert("You must be signed in as an Artist to view this profile")
            window.location = 'index.html';
        }

        document.getElementById("nameHeader").innerHTML="Welcome " + artistName;

    }
    );
}
else {
    // No user is signed in.
    alert("You must be signed in to view your profile");

	//code to send back to homepage
	window.location = 'login_registration.html';
}
});