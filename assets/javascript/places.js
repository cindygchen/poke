var query = "hiking"
var searchObjectNameLocationAndPhotoID = []


$.ajax({
    url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
}).done(function(response) {
    var items = response.results
    var description;
    var attachToPin = {};
    console.log(items)
    for (let value of items) {
        var lat = value.geometry.location.lat
        var lng = value.geometry.location.lng
        var photoID = value.photos && value.photos[0].photo_reference
        var name = value.name
        var placeID = value.place_id
            $.ajax({
                url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw",
                    async: false
            }).done(function(response) {
                description = response.result.reviews
            })
        console.log(description)
        var attachToPin = {
            name: name,
            lat: lat,
            lng: lng,
            photoID: photoID,
            description: description
        }
        console.log(attachToPin)
        searchObjectNameLocationAndPhotoID.push(attachToPin)
        console.log(searchObjectNameLocationAndPhotoID)

    }


    return searchObjectNameLocationAndPhotoID
})