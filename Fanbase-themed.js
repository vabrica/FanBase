
$(document).ready(function(){
	$('.input-daterange').datepicker({
		format: "dd/mm/yyyy"
	});

	$('.carousel').carousel({
	  interval: 10000
	});

	$('.search-kw').on("click", function() {
		console.log('search clicked!')
	})
})

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





	

	
