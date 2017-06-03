var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 32.8800604, lng: -117.2340135},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        //markers
        var geoloc = [0,0]
        var position = {lat: geoloc[0], lng: geoloc[1]}
        var marker = new google.maps.Marker({
        position: position,
        map: map
        });

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

//--------------------------------------------------------------
//
// Zumato Seach by Name, returns address, lat, long, and name 
//
//--------------------------------------------------------------
var searchQuery = "poke"
var passArray = [];

function attachToPin(name, lat, long) {
    this.name = name
    this.lat = lat
    this.long = long
}

$.ajax({
    url: "https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&q=" + searchQuery + "&start=0&count=5",
    beforeSend: function(request) {
        request.setRequestHeader("user-key", "4131e850ec76a23e63ba6bbf9570ed93")
    }
}).done(function(response) {
    var name = [];
    var address = [];
    var coord = [];
    var tempArray = [];
    var lat;
    var long;
    var tempCoord

    console.log(response)
    console.log(response.restaurants)
    for (let value of response.restaurants) {
        var eachName = value.restaurant.name
        console.log(eachName);
        name.push(eachName)
        console.log(name)
        var eachAddress = value.restaurant.location.address
        address.push(eachAddress);
    }

    for (let value of address) {
      console.log(value)
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + value,
            method: "GET"
        }).done(function(response) {
            for (let value of response.results) {
                console.log(value.geometry.location)
                lat = value.geometry.location.lat
                long = value.geometry.location.lng
                tempCoord = [lat, long]
                tempArray.push(tempCoord)
            }
            console.log(tempArray)

        }).done(function() {
          if (tempArray.length !== 5 ){
            return 
          }
            console.log(name)
            console.log(tempArray)
            for (i = 0; i < name.length; i++) {
                var mapPinAddressAndName = new attachToPin(name, lat, long)
                mapPinAddressAndName.name = name[i]
                mapPinAddressAndName.lat = tempArray[i][0]
                mapPinAddressAndName.long = tempArray[i][1]
                passArray.push(mapPinAddressAndName)
            }
        })
    }


})
            console.log(passArray)
