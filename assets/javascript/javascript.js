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

