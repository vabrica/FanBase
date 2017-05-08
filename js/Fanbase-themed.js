
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

function doSearch(){

	var x = document.getElementById("searchbox").value;
	var gigs = [];
	$("#search-results").html("");

	database.ref('Gigs').on('child_added',function(snapshot){ // retrieves all gigs from DB 
		gigs.push(snapshot.val()); // stores all gigs 
	});

	var matched = $.grep(gigs, function (element, index) { // grep to search within array
		return element.bandName.toLowerCase().indexOf(x) != -1; 
	});

	$.each(matched, function( index, artist ){
		$("#search-results").append("<h3>" + artist.bandName + "</h3>Date: " + artist.date + "<br>Venue: " + artist.venue + "<br><a href='gigs.html' class='btn btn-default fanbase-pink'>Buy Tickets</a><hr>");
	});

}
	
function active(){
	var searchBar=document.getElementById('searchBar');
	if (searchBar.value =='Search...') {
		searchBar.value=''
		searchBar.placeholder='Search Artists, Locations, Venues'
	}
}

function inactive (){
	var searchBar=document.getElementById('searchBar');
	if (searchBar.value =='') {
		searchBar.value ='Search...'
		searchBar.placeholder=''
	}
}

$(document).ready(function(){

	$('.input-daterange').datepicker({
		format: "dd/mm/yyyy"
	});

	$('.carousel').carousel({
		interval: 10000
	});

	$('.search-kw').on("click", function() {
		doSearch();
	})

})


