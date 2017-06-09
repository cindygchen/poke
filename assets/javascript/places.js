var query = "hiking"
var searchObjectNameLocationAndPhotoID = []


$.ajax({
    url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"

}).done(function(response) {

    var coord = [];
    var photoID = [];
    var placeID;
    var name;
    var items = response.results
    var description;
    console.log(items)
    console.log(items[0].photos[0].photo_reference)
    for (let value of items) {
        var lat = value.geometry.location.lat
        var lng = value.geometry.location.lng
        console.log(value)
        photoID = value.photos && value.photos[0].photo_reference
        name = value.name
        placeID = value.place_id
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
        }).done(function(response) {
            console.log(response)
            description = response.result.reviews
            console.log(description)
            var attachToPin = {
                name: name,
                lat: lat,
                lng: lng,
                photoID: photoID,
                description: description
            }
            searchObjectNameLocationAndPhotoID.push(attachToPin)
        })
    }
    return searchObjectNameLocationAndPhotoID
})