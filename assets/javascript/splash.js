// When splash page food tile is clicked, display restaurant category tiles and buttons
$(".food-tile").on("click", function() {
	$(".hero-title").html("What are you hungry for?");
	$(".is-ancestor").empty().addClass("line1");
	$(".tiles").append("<div class='tile is-ancestor line2'></div>")
				.append("<div class='tile is-ancestor line3'></div>")
	$(".button-area").append("<div class='column is-2 is-offset-4'><a href='index.html' class='button is-primary is-large go-button'>Go</a></div>")
						.append("<div class='column is-2'><a href='splash.html' class='button is-primary is-large cancel-button'>Cancel</a></div>");
	var foodChoices = ["Italian", "Chinese", "Mexican", "Japanese", "Mediterranean",
						"Thai", "American", "Indian", "Vietnamese"];
	for (var i = 0; i < 3; i++) {
		$(".line1").append("<div class='tile is-parent food-tile-" + i + "'>");
		$(".food-tile-" + i).html("<article class='tile is-child box notification is-primary choices'><p class='title'>" + foodChoices[i] + "</p></article>");
	}
	for (var i = 3; i < 6; i++) {
		$(".line2").append("<div class='tile is-parent food-tile-" + i + "'>");
		$(".food-tile-" + i).html("<article class='tile is-child box notification is-primary choices'><p class='title'>" + foodChoices[i] + "</p></article>");
	}
	for (var i = 6; i < 9; i++) {
		$(".line3").append("<div class='tile is-parent food-tile-" + i + "'>");
		$(".food-tile-" + i).html("<article class='tile is-child box notification is-primary choices'><p class='title'>" + foodChoices[i] + "</p></article>");
	}
});

// When splash page day activities tile is clicked, display day category tiles and buttons
$(".day-tile").on("click", function() {
	$(".hero-title").html("Carpe diem!");
	$(".is-ancestor").empty();
	$(".button-area").append("<div class='column is-2 is-offset-4'><a href='index.html' class='button is-primary is-large go-button'>Go</a></div>")
						.append("<div class='column is-2'><a href='splash.html' class='button is-primary is-large cancel-button'>Cancel</a></div>");
	var dayChoices = ["Beaches", "Hikes", "Farmers Markets", "Breweries"];
	for (var i = 0; i < dayChoices.length; i++) {
		$(".is-ancestor").append("<div class='tile is-parent day-tile-" + i + "'>");
		$(".day-tile-" + i).html("<article class='tile is-child box notification is-primary choices'><p class='title'>" + dayChoices[i] + "</p></article>");
	}		
});

// When splash page night activities tile is clicked, display night category tiles and buttons
$(".night-tile").on("click", function() {
	$(".hero-title").html("Night owls welcome...");
	$(".is-ancestor").empty();
	$(".button-area").append("<div class='column is-2 is-offset-4'><a href='index.html' class='button is-primary is-large go-button'>Go</a></div>")
						.append("<div class='column is-2'><a href='splash.html' class='button is-primary is-large cancel-button'>Cancel</a></div>");
	var nightChoices = ["Bars", "Clubs", "Breweries"];
	for (var i = 0; i < nightChoices.length; i++) {
		$(".is-ancestor").append("<div class='tile is-parent night-tile-" + i + "'>");
		$(".night-tile-" + i).html("<article class='tile is-child box notification is-primary choices'><p class='title'>" + nightChoices[i] + "</p></article>");
	}
});

// When any category tile is clicked, save it's text in an array to use in AJAX call
var searchTerms = [];
$(document).on("click", ".choices", function() {
	$(this).removeClass("is-primary").css({"background-color": "#007664", "color": "#fff"});
	var buttonValue = $(this).text();
	searchTerms.push(buttonValue);
});

// When user completes splash page navigation/input, display results and map
$(document).on("click", ".go-button", function() {
 	//make API call to Zumato/Google Places, use results to populate content area of index.html
	//make API call to Google Maps, use results to add pins to map
});



// Details are hidden on page load. When you click on a result, it expands to show details
$(".details").hide();
$(document).on("click", ".details-link", function() {
	$(this).parents().eq(3).next().slideToggle(700);
});

