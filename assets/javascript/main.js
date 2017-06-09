var searchObjectNameLocationAndPhotoID = []; 

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
$(window).on("load", function() {
    if (splashSearch != []) {
        for (var i = 0; i < splashSearch.length; i++) {
            //make API calls
            var query = splashSearch[i];
            $.ajax({
                url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"

            }).done(function(response) {
                var nameArray = [];
                var photoIDArray = [];
                var coordArray = [];
                var coord = [];
                var lat;
                var lng;
                var photoID = [];
                var name;
                var items = response.results
                var tempArray = []

                for (let value of items) {
                    lat = value.geometry.location.lat
                    lng = value.geometry.location.lng
                    photoID = value.photos && value.photos[0].photo_reference
                    name = value.name
                    coord = [lat, lng]
                    nameArray.push(name)
                    photoIDArray.push(photoID)
                    coordArray.push(coord)
                }
                for (i = 0; i < nameArray.length; i++) {
                    var attachToPin = {
                        name: nameArray[i],
                        lat: coordArray[i][0],
                        lng: coordArray[i][1],
                        photoID: photoIDArray[i]
                    }
                    tempArray.push(attachToPin)
                }

                searchObjectNameLocationAndPhotoID.push(tempArray)
                return searchObjectNameLocationAndPhotoID
            })
        }
    }
});



// If user reloads page after navigating to main.html, they lose their search criteria
$(window).on("unload", function() {
    sessionStorage.clear();
    splashSearch = [];
});

function generateContent() {
	$(".results").append("<article class='media hiking'><div class='media-left'><figure class='image is-48x48'><svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='4' fill='#00d1b2'></svg><object type='image/svg+xml' data='assets/images/icons/hiker.svg' class='type-icon'>Your browser does not support SVG</object></figure></div><div class='media-content'><div class='content'><p><strong>Hiking Trailhead</strong> <a class='details-link'><small>More Details</small></a><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p></div></div></article><div class='details'><br><div class='details-content'>HERE ARE THE DETAILS!</div></div><hr>");
};
