// Details are hidden on page load. When you click on a result, it expands to show details
$(".details").hide();
$(document).on("click", ".details-link", function() {
	$(this).parents().eq(3).next().slideToggle(700);
});

// When user uses index.html search field, add their input to an array
$(".index-search-button").on("click", function(event) {
	event.preventDefault();
	var indexSearch = $(".index-search-field").val().trim();
	$(".index-search-field").val("");
	if (indexSearch != "") {
		//make API calls
	}
});

// splashSearch saves the sessionStorage data into a new array
var splashSearch = sessionStorage.userChoices.split([","]);
console.log("Search Terms: " + splashSearch);

// On load, if splashSearch is not empty, search Google Places for those search terms
$(window).on("load", function() {
	if (splashSearch != []) {
		for (var i = 0; i < splashSearch.length; i++) {
			//make API calls
		}
	}
});

// If user reloads page after navigating to index.html, they lose their search criteria
$(window).on("unload", function() {
	sessionStorage.clear();
	splashSearch = [];
});
