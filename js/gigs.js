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
	var numberOfGigs = 0;
	var uid = "";
	var i = 0;
	var currentGigId = 0;
	var mydata = database.ref();
	var a = 0;
	var b = 0;
	var updateThisGig = 0;
	var myVar = 0;
	var time = 2000;
	var currentNumTickets = 0;
	var currentGigId = 0;
	

	firebase.auth().onAuthStateChanged(function(user) {
		
		if (user) 
		{
    // User is signed in.
	//alert("User is signed in");
	uid = user.uid;
	//alert("uid to get numberOfGigs = " + uid);
	

	var ref = firebase.database().ref("GigIds");
	ref.once("value")
	.then(function(snapshot){
			numberOfGigs = snapshot.numChildren(); // get the number of gigs in database there
			//alert("numberOfGigs snapshot " + numberOfGigs);
			
			
	//alert("numberOfGigs value before loop " + numberOfGigs);
	
	for (i = 0; i < numberOfGigs; i++){ // loop through number of gigs in database
		time += 1000;
		
		myVar = setTimeout(UpdateGigInfo(i), time); //the key you need to get the gig ID value
		
		} // end of for 
		}); //end of snapshot
		} // end of if
		
		
		else {
    // No user is signed in.
    alert("No user signed in");
}


});


	function selectionInfo(z)
	{
	// set gigID to a
	// set numTickets to b
	
	currentNumTickets = document.getElementById("numTickets" + z).innerHTML;
	
	currentGigId = document.getElementById("id" + z).innerHTML; 
	
	var costOfTicket = document.getElementById("priceTickets" + z).innerHTML;
	
	
	alert("costOfTicket " + costOfTicket);
	
	
	LoadPrice(costOfTicket);
	
	
}




// pushing info into firebase // STILL HAVE TO DO THIS BUYTICKETS FUCTION
	function buyTickets() // need to pass in gig ID and numTickets avaiable and number of tickets they want to buy
	{
		
		numTicketsBought = document.getElementById("ticketQty").value; 
		
		alert("numTicketsBought = " + numTicketsBought);
		
		alert("currentNumTickets = " + currentNumTickets);
		alert("currentGigId = " + currentGigId);
		
		var user = firebase.auth().currentUser;
		uid = user.uid;
		alert("BUY TICKETS uid = " + uid);
		
		
		
		if(parseInt(currentNumTickets) >= parseInt(numTicketsBought))
		{
			alert("Tickets are available");	
			
			currentNumTickets = currentNumTickets - numTicketsBought;
			
			var mydata = database.ref('/Gigs/' + currentGigId);  // creates ref at Gigs
			mydata.update({'numTickets':currentNumTickets}); // adds unique key then the following nodes
			
			


			// date, numTickets, time, venue, priceTickets, bandName
			
			
			var mydata2 = database.ref('/BoughtTickets/' + uid);
			//mydata2.set({numberOfGigs: postID});
			
			var updatedObj = {};
			updatedObj[currentGigId] = numTicketsBought; // 
			mydata2.update(updatedObj); // 
		}
		
		else
		{
			alert("Not enough tickets available");
		}
	}
	
	
	function UpdateGigInfo(x)
	{
		
		
		mydata.child('GigIds').on('value', 
			function(snapshot) 
			{
				
			currentGigId = snapshot.child(x).val(); //get GigID
			//alert("current GigID = " + currentGigId);
			
			UpdateGigInfo2(x, currentGigId);
			
			
		});

		
		
	}

	function UpdateGigInfo2(x,updateThisGig)
	{
		
		
		
		mydata.child('Gigs').on('value', 
			function(snapshot) 
			{
			//alert("in updateGigInfo x = " + x);
			var bandId = snapshot.child(updateThisGig + "/bandId").val(); // can be UID instead off push
			var bandName = snapshot.child(updateThisGig + "/bandName").val();
			var date = snapshot.child(updateThisGig + "/date").val();
			var numTickets = snapshot.child(updateThisGig + "/numTickets").val();
			var priceTickets = snapshot.child(updateThisGig + "/priceTickets").val();
			var time = snapshot.child(updateThisGig + "/time").val();
			var venue = snapshot.child(updateThisGig + "/venue").val();
			
			
			//alert("numTickets snapshot " + numTickets);
			//alert("bandName snapshot " + bandName);
			
			//document.getElementById("Fname").value=bandId; // GET THE CORRECT NAMES OF HTML ELEMENTS
			document.getElementById("name" + x).innerHTML=bandName;
			document.getElementById("date" + x).innerHTML=date;
			document.getElementById("numTickets" + x).innerHTML=numTickets;
			document.getElementById("priceTickets" + x).innerHTML=priceTickets;
			//document.getElementById("address3").value=time;
			document.getElementById("venue" + x).innerHTML=venue;
			
			document.getElementById("id" + x).innerHTML=updateThisGig; // SAVE CURRENT GIG ID SOMEWHERE SO IT CAN BE PASSED TO BUYTICKETS()
			
		});		
		
	}		
	




	function LoadPrice(price) //modal price
	{
		$("#total").html(price);
		$("input[name=price-rules]").val(price);
		$(".qty").val("1");
	}


	$(document).ready(function(){

		$('.qty').on("change", function() {
			var price2 = $("input[name=price-rules]").val();
			var quantity2 = $(".qty").val();
			$("#total").html(quantity2 * price2);
		});
		
	});


	



