
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

	var search = { 
		"index": "artists",
		"type": "artist",
		//"q": "*"
	};

	var x = document.getElementById("searchbox").value;
	search.q=x;
	console.log(search);

	var key = database.ref("search/request").push(search).key;

	database.ref("search/response").on('value',function(snapshot){ // listen to any search responses 

		console.log(snapshot.val());

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


