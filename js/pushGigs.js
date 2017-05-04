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
	var artistName = "";
	var numberOfGigs = 0;
	
	
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
    // User is signed in.
    // alert("User is signed in");
    var uid = user.uid;
    // alert("uid to get artistname = " + uid);
    
    var mydata = database.ref();

    mydata.child('Artists').on('value', 
    	function(snapshot) 
    	{
			artistName = snapshot.child(uid + "/artistName").val();  // use as bandName
			
			// alert("artistName snapshot " + artistName);
			
		});
    
} else {
    // No user is signed in.
    alert("No user signed in");
}
});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
    // User is signed in.
    // alert("User is signed in");
    var uid = user.uid;
    // alert("uid to get numberOfGigs = " + uid);
    
    var mydata = database.ref();

    var ref = firebase.database().ref("GigIds");
    ref.once("value")
    .then(function(snapshot) 
    {
			numberOfGigs = snapshot.numChildren(); // get the number of gigs in there
			// alert("numberOfGigs snapshot " + numberOfGigs);
		});
    
} else {
    // No user is signed in.
    alert("No user signed in");
}
});
	
	

// pushing info into firebase
function pushGigs()
{
	
	var user = firebase.auth().currentUser;
	var uid = user.uid;
	// alert("PUSH GIGS uid = " + uid);
	
		var passedDate = document.getElementById("date").value; // get value from the input

		var passedNumTickets = document.getElementById("numTickets").value;

		var passedTime = document.getElementById("time").value; // get value from the input

		var passedVenue = document.getElementById("venue").value;

		var passedPriceTickets = document.getElementById("priceTickets").value; // get value from the input

		var mydata = database.ref('/Gigs/');  // creates ref at Gigs
		var postRef = mydata.push({'date': passedDate,'numTickets':passedNumTickets,'time':passedTime, 'venue': passedVenue,'priceTickets':passedPriceTickets,'bandName':artistName,'bandId':uid}); // adds unique key then the following nodes
		var postID = postRef.key;  // saves unique key from above // Going to need this later when tickets are bought. How to access it?


		// date, numTickets, time, venue, priceTickets, bandName
		
		
		var mydata2 = database.ref('/GigIds');
		//mydata2.set({numberOfGigs: postID});
		
		var updatedObj = {};
		updatedObj[numberOfGigs] = postID;
		mydata2.update(updatedObj); // Works can only add one gig at a time. Get submit button to move them to a different page?

		alert("Gig created");
		window.location = 'my_profile_artist.html';
		
	}

