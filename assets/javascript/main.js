// Details are hidden on page load. When you click on a result, it expands to show details
$(".details").hide();
$(document).on("click", ".details-link", function() {
    $(this).parents().eq(3).next().slideToggle(700);
});

// When user uses main.html search field, add their input to an array
$(".main-search-button").on("click", function(event) {
    event.preventDefault();
    var mainSearch = $(".main-search-field").val().trim();
    $(".main-search-field").val("");
    if (mainSearch != "") {
        //make API calls
    }
});

// splashSearch saves the sessionStorage data into a new array
var splashSearch = sessionStorage.userChoices.split([","]);
console.log("Search Terms: " + splashSearch);

// On load, if splashSearch is not empty, search Google Places for those search terms
var searchObjectNameLocationAndPhotoID = []; 
$(window).on("load", function() {
    if (splashSearch != []) {
        for (var i = 0; i < splashSearch.length; i++) {
            //make API calls
            var query = splashSearch[i];
            $.ajax({
    			url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
			}).done(function(response) {
			    var coord = [];
			    var attachToPin = {};
			    var photoID = [];
			    var placeID;
			    var name;
			    var items = response.results;
			    var description;
			    console.log(items);
			    console.log(items[0].photos[0].photo_reference);
			    for (let value of items) {
			        var lat = value.geometry.location.lat;
			        var lng = value.geometry.location.lng;
			        console.log(value);
			        photoID = value.photos && value.photos[0].photo_reference;
			        name = value.name;
			        placeID = value.place_id;
			        $.ajax({
			            url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
			        }).done(function(response) {
			            console.log(response);
			            description = response.result.reviews;
			            console.log(description);
			            attachToPin = {
			                name: name,
			                lat: lat,
			                lng: lng,
			                photoID: photoID,
			                description: description
			            };

			    		var circle = $("<circle>").attr({"cx":"50", "cy":"50", "r":"40", "stroke": "black", "stroke-width":"4", "fill": "#00d1b2"});
						var svg = $("<svg>").attr({"width": "100", "height": "100"}).append(circle);
						var object = $("<object>").attr({"type":"image/svg+xml", "data":"assets/images/icons/" + "disco-ball" + ".svg", "class":"type-icon"});
						var figure = $("<figure>").append(svg).append(object);
						var div1 = $("<div>").addClass("media-left").append(figure);
						var div2Child = $("<div>").addClass("content").append("<p><strong>" + attachToPin.name + "</strong> <a class='details-link'><small>More Details</small></a><br>" + "description" + "</p>");
						var div2 = $("<div>").addClass("media-content").append(div2Child);
						var article = $("<article>").addClass("media").append(div1).append(div2);
						var detailsDiv = $("<div>").addClass("details").append("<br><div class='details-content'>" + "HERE ARE THE DETAILS!" + "</div>");
						$(".results").append(article).append(detailsDiv).append("<hr>");

			            searchObjectNameLocationAndPhotoID.push(attachToPin)
			        });

			    }
			    
			    return searchObjectNameLocationAndPhotoID

			    console.log(items[0].photos[0].photo_reference)
			    for (let value of items) {
			        var lat = value.geometry.location.lat
			        var lng = value.geometry.location.lng
			        console.log(value)
			        photoID = value.photos && value.photos[0].photo_reference
			        name = value.name
			        placeID = value.place_id

			        var attachToPin={
			        	name: name,
			        	lat: lat,
			        	lng: lng,
			        	photoID: photoID,
			       	// 	description: $.ajax({
			        //     	url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
			        // }).done(function(response) {
			        //     return response.result.reviews
			        //   })
			        	}
			     
			            searchObjectNameLocationAndPhotoID.push(attachToPin)
			    }

			    console.log(searchObjectNameLocationAndPhotoID);
			    makemarks();

			})







        }
    }
});

function makemarks(){
        for(var i = 0; i < searchObjectNameLocationAndPhotoID.length; i++){
        var marker = new google.maps.Marker({
            position: searchObjectNameLocationAndPhotoID[i].position,
            icon: {
                // url: icons[markers[i].type].icon,
                url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                scaledSize: new google.maps.Size(20,20),
                strokeWeight: 100,
                strokeColor: 'black'
                },
                name: markers[i].name,
                map: map,
                address: markers[i].address,
                id: markers[i].id
              });
    }
}

// If user reloads page after navigating to main.html, they lose their search criteria
$(window).on("unload", function() {
    sessionStorage.clear();
    splashSearch = [];
});

function generateContent() {
	$(".results").append("<article class='media'><div class='media-left'><figure class='image is-48x48'><svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='4' fill='#00d1b2'></svg><object type='image/svg+xml' data='assets/images/icons/hiker.svg' class='type-icon'>Your browser does not support SVG</object></figure></div><div class='media-content'><div class='content'><p><strong>Hiking Trailhead</strong> <a class='details-link'><small>More Details</small></a><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p></div></div></article><div class='details'><br><div class='details-content'>HERE ARE THE DETAILS!</div></div><hr>");
};

function cleanGenerateContent() {
<<<<<<< HEAD
	var circle = $("<circle>").attr({"cx":"50", "cy":"50", "r":"40", "stroke": "black", "stroke-width":"4", "fill": "#00d1b2"});
	var svg = $("<svg>").attr({"width": "100", "height": "100"}).append(circle);
	var object = $("<object>").attr({"type":"image/svg+xml", "data":"assets/images/icons/" + "disco-ball" + ".svg", "class":"type-icon"});
	var figure = $("<figure>").append(svg).append(object);
	var div1 = $("<div>").addClass("media-left").append(figure);
	var div2Child = $("<div>").addClass("content").append("<p><strong>" + attachToPin.name + "</strong> <a class='details-link'><small>More Details</small></a><br>" + "description" + "</p>");
	var div2 = $("<div>").addClass("media-content").append(div2Child);
	var article = $("<article>").addClass("media").append(div1).append(div2);
	var detailsDiv = $("<div>").addClass("details").append("<br><div class='details-content'>" + "HERE ARE THE DETAILS!" + "</div>");
	$(".results").append(article).append(detailsDiv).append("<hr>");
}
=======
	var circle = $("circle").attr({"cx":"50", "cy":"50", "r":"40", "stroke": "black", "stroke-width":"4", "fill": "#00d1b2"});
	var svg = $("svg").attr({"width": "100", "height": "100"}).append(circle);
	var object = $("object").attr({"type":"image/svg+xml", "data":"assets/images/icons/" + "disco-ball" + ".svg", "class":"type-icon"});
	
	var newArticle = $("article").addClass("media");
	var newFigure = $("");
};
>>>>>>> 8997bcdf18a5a5f70d50919f2f7c2eafe753ca09
