var searchObjectNameLocationAndPhotoID = []; 


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



// If user reloads page after navigating to index.html, they lose their search criteria
$(window).on("unload", function() {
    sessionStorage.clear();
    splashSearch = [];
});
