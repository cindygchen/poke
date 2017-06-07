var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: 32.8800604, lng: -117.2340135},
          zoom: 12,
          mapTypeId: 'roadmap'
        });
        infoWindow = new google.maps.InfoWindow;

        //markers

//

        var iconBase = 'assets/images/icons/';
        var icons = {
          Hiking: {
            icon: iconBase + 'hiker.svg'
          },
            FarmersMarket: {
            icon: iconBase + 'basket.svg'
          },
          Beach: {
            icon: iconBase + 'sandals.svg'
          },
          Bar: {
            icon: iconBase + 'cocktail.svg'
          },
          Breweries: {
            icon: iconBase + 'beer.svg'
          },
          Club: {
            icon: iconBase + 'disco-ball.svg'
          }

        };

        var features = [
          {
            name: 'Three Sister Falls Trailhead',
            position: new google.maps.LatLng(33.033379, -116.634983),
            address: "Boulder Creek Rd, Santa Ysabel, CA 92070",
            type: 'Hiking'
          }, {
            name: 'Torrey Pines State Reserve',
            position: new google.maps.LatLng(32.933677, -117.260678),
            address:  "12600 N Torrey Pines Rd, La Jolla, CA 92037",
            type: 'Hiking'
          }, {
            name: 'Cowles Mountain Trail',
            position: new google.maps.LatLng(32.803483, -117.038017),
            address: "7027, 7001 Golfcrest Dr, San Diego, CA 92119",
            type: 'Hiking'
          }, {
            name: 'Cedar Creek Falls Trailhead',
            position: new google.maps.LatLng(32.996999, -116.756133),
            address: "15519 Thornbush Rd, Ramona, CA 92065",
            type: 'Hiking'
          }, 

          {
            name: 'La Jolla',
            position: new google.maps.LatLng(32.838456, -117.271468),
            address: "7335 Girard Ave, La Jolla, CA 92037",
            type: 'FarmersMarket'
          }, {
            name: 'Hillcrest',
            position: new google.maps.LatLng(32.75055, -117.149296),
            address: "3960 Normal St, San Diego, CA 92103",
            type: 'FarmersMarket'
          }, {
            name: 'Little Italy',
            position: new google.maps.LatLng(32.721947, -117.167558),
            address: "519 W Cedar St, San Diego, CA 92101",
            type: 'FarmersMarket'
          }, {
            name: 'Ocean Beach',
            position: new google.maps.LatLng(32.745802, -117.249336),
            address: "4900 Newport Ave, San Diego, CA 92107",
            type: 'FarmersMarket'
          }, {
            name: 'Liberty Station',
            position: new google.maps.LatLng(32.740159, -117.211195),
            address: "2820 Historic Decatur Rd, San Diego, CA 92106",
            type: 'FarmersMarket'
          }, 
          { 
            name: 'La Jolla Shores',
            position: new google.maps.LatLng(32.856793, -117.256385),
            address: "8300 Camino Del Oro, La Jolla, CA 92037",
            type: 'Beach'
          }, {
            name: 'Pacific Beach',
            position: new google.maps.LatLng(32.794685, -117.251303),
            address: "974 Thomas Ave, San Diego, CA 92109",
            type: 'Beach'
          }, {
            name: 'Moonlight Beach',
            position: new google.maps.LatLng(33.048509, -117.297114),
            address: "400 B St, Encinitas, CA 92024",
            type: 'Beach'
          }, {
            name: 'Wind n Sea Beach',
            position: new google.maps.LatLng(32.830936, -117.280595),
            address: "6800 Neptune Pl, San Diego, CA 92039",
            type: 'Beach'
          }, {
            name: 'Coronado Beach',
            position: new google.maps.LatLng(32.684183, -117.184432),
            address: "838 Ocean Blvd, Coronado, CA 92118",
            type: 'Beach'
          }, 
          {
            name: 'False Idol',
            position: new google.maps.LatLng(32.720727, -117.168865),
            address: " 675 W Beech St, San Diego, CA 92101",
            type: 'Bar'
          }, {
            name: 'PB Alehouse',
            position: new google.maps.LatLng(32.794261, -117.255312),
            address: "721 Grand Ave, San Diego, CA 92109",
            type: 'Bar'
          }, {
            name: "Noble's Exeriment",
            position: new google.maps.LatLng(32.712393, -117.157611),
            address: "777 G St, San Diego, CA 92101",
            type: 'Bar'
          }, {
            name: 'Coin-Op',
            position: new google.maps.LatLng(32.749033, -117.130377),
            address: "3926 30th St, San Diego, CA 92104",
            type: 'Bar'
          }, {
            name: "Winson's",
            position: new google.maps.LatLng(32.747129, -117.250661),
            address: "1921 Bacon St, San Diego, CA 92107",
            type: 'Bar'
          },

            {
            name: 'Ballast Point',
            position: new google.maps.LatLng(32.888162, -117.158014),
            address: "9045 Carroll Way, San Diego, CA 92121",
            type: 'Breweries'
          }, {
            name: 'Stone Brewing',
            position: new google.maps.LatLng(32.740155, -117.211195),
            address: "2816 Historic Decatur Rd #116, San Diego, CA 92106",
            type: 'Breweries'
          }, {
            name: "Modern Times",
            position: new google.maps.LatLng(32.754247, -117.206219),
            address: "3725 Greenwood St, San Diego, CA 92110",
            type: 'Breweries'
          }, {
            name: 'Green Flash',
            position: new google.maps.LatLng(32.907057, -117.177778),
            address: "6550 Mira Mesa Blvd, San Diego, CA 92121",
            type: 'Breweries'
          }, {
            name: "Coronado Brewing Company",
            position: new google.maps.LatLng(32.771864, -117.204548),
            address: "1205 Knoxville St, San Diego, CA 92110",
            type: 'Breweries'
          },

        {
            name: 'Oxford SD',
            position: new google.maps.LatLng(32.709914, -117.160134),
            address: "435 Fifth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: 'Fluxx',
            position: new google.maps.LatLng(32.710677, -117.161332),
            address: "500 Fourth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: "Omnia",
            position: new google.maps.LatLng(32.710179, -117.159496),
            address: "454 Sixth Ave, San Diego, CA 92101",
            type: 'Club'
          }, {
            name: 'Bang Bang',
            position: new google.maps.LatLng(32.711788, -117.159597),
            address: "526 Market St, San Diego, CA 92101",
            type: 'Club'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: {
                url: icons[feature.type].icon,
                scaledSize: new google.maps.Size(100,100),
                strokeWeight: 100,
                strokeColor: 'black'
            },
            map: map
          });
        });
      
      //


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
var searchQuery = "poke";
var passArray = [];

function attachToPin(name, lat, long) {
    this.name = name;
    this.lat = lat;
    this.long = long;
}

$.ajax({
    url: "https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&q=" + searchQuery + "&start=0&count=5",
    beforeSend: function(request) {
        request.setRequestHeader("user-key", "4131e850ec76a23e63ba6bbf9570ed93");
    }
}).done(function(response) {
    var name = [];
    var address = [];
    var coord = [];
    var tempArray = [];
    var lat;
    var long;
    var tempCoord;

    console.log(response);
    console.log(response.restaurants);
    for (let value of response.restaurants) {
        var eachName = value.restaurant.name
        console.log(eachName);
        name.push(eachName);
        console.log(name);
        var eachAddress = value.restaurant.location.address;
        address.push(eachAddress);
    }

    for (let value of address) {
      console.log(value)
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + value,
            method: "GET"
        }).done(function(response) {
            for (let value of response.results) {
                console.log(value.geometry.location);
                lat = value.geometry.location.lat;
                long = value.geometry.location.lng;
                tempCoord = [lat, long];
                tempArray.push(tempCoord);
            }
            console.log(tempArray);

        }).done(function() {
          if (tempArray.length !== 5 ){
            return;
          }
            console.log(name);
            console.log(tempArray);
            for (i = 0; i < name.length; i++) {
                var mapPinAddressAndName = new attachToPin(name, lat, long);
                mapPinAddressAndName.name = name[i];
                mapPinAddressAndName.lat = tempArray[i][0];
                mapPinAddressAndName.long = tempArray[i][1];
                passArray.push(mapPinAddressAndName);
            }
        })
    }


})
            console.log(passArray);


//--------------------------------------------------------------
//
// Google Places search. Returns lat, long, name, and photoID 
//
//--------------------------------------------------------------

var query = "hiking"


/*$.ajax({
  url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+ query +"&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"

}).done(function(response){
  var nameArray =  [];
  var photoIDArray = [];
  var coordArray = [];
  var coord = [];
  var lat;
  var lng;
  var photoID = [];
  var name;
  var items = response.results
  console.log(items)
  console.log(items[0].photos[0].photo_reference)
  for (let value of items) {
    lat = value.geometry.location.lat 
    lng = value.geometry.location.lng
    console.log(value)
    photoID = value.photos && value.photos[0].photo_reference
    name = value.name 
    coord = [lat,lng]
    nameArray.push(name)
    photoIDArray.push(photoID)
    coordArray.push(coord)
  }
  console.log(nameArray)
  console.log(JSON.stringify(photoIDArray))
  console.log(JSON.stringify(coordArray))
})
*/
  var nameArray = ["Miner's Ridge Loop Trail", "Mission Trails-Kwaay Paay Peak Hike", "Blue Sky Ecological Reserve", "Three Sister Falls", "Annie's Canyon Trail", "Lake Jennings", "Shepherd Canyon", "Iron Mountain Trail Head", "Lake Calavera Hiking Trail", "Del Dios Gorge", "Ho Chi Minh Trail", "El Capitan Preserve", "Torrey Pines State Reserve", "Tecolote Canyon Natural Park", "Elfin Forest Recreational Reserve", "Crest Canyon Park", "Black Mountain Open Space Park", "Mt. Gower County Preserve", "Calavera Lake", "Mission Trails Regional Park"];
  var photoIDArray = ["CmRaAAAAueLo-cy3BDZi6Fsi1puGYP_scGVQzNP6D_odyhLYVX6Dr7hrN8zSA8TiaD7pqTkvff6AH8_VPnEudrKl75f8riw4AomsJL6kaqrhRYtjpYhzP0Cn71r5MYBtERWlQJL_EhBRKxx9-kYsjUeTjsOz4J04GhRhNPq0b4aRq8xnu2xQwtgnRRkA7Q","CmRaAAAAXVjpP7FH529XBTaXCzMRvFbD2k3V_nN04sgV0b3RlUExVq6EDTa1_9qM0E2j_rJubdQg4Lloor5aPqzaUYSKNHscjeItmf2vBkm5g8dBXfOVfAxiLItX1jbyCKnMvwJsEhCVTZuRFHR8DYCgosE29yxiGhQ6nXcCiH5UdioPW_Ymmx0Ie0qyXw","CmRaAAAAo-0aF17sJPx634J9fuUx3bunoyn9tj3rata3f8qFRC67BFLArUEelTH4uayG09i8CByC8pUHU57gX6afURN3ECSsaWHn9LcFyfCf2rBbGsKaPvQ7tVcnWo-uRwkNN37jEhDUDftmsp7hK3i-pitvcLxfGhR6ZYgGVZtxy5d3noZPiZvYUJFNOw","CmRaAAAAV41aPguLhl6qDX3pl8oaOXoZ48JtV8QKGF2374o1t92EEPHwGfNhhmjDKurfRQ0yONFOaXVTv1ZCBmz_uiy4nnu8zZXJ0Dm2KGTXSYxd_29TvPqMip5Er1hu5to9aqxhEhDwt4Izj2a7Tl1Uj8jH7PmNGhSO4I1h6VeyIY_nkDgrbzNkS2qX-w","CmRaAAAARMKJW4p7E1I6s_6HAc-Cf5XQT2YzkJI5QZa4mq2UJE5bQh7lkwZwoPKbr6PnWv3aS3RwqCOZZOo_QOPzq_b4Ma8NM6EPvROYD-PrezhgNXj5KVWClxm6SFSaI_AVV7avEhDnJxdtXnoO3ZpGzOeEuHGaGhQhEmx-hdXkgpi9oOPmNMTkb-s6XA",null,"CmRaAAAA8OW_bQhMThzips5gfEYsTROBIpUcYsb5ICeAPPviM8-INPe2-eCzMzSFSu5KbBbiAVwHYkZAVOQi6uD2bQFV_LxPTNj8grwrrXWu5dDy6h5fFrCP4QNumwi-oQf0cZDaEhCjzYcWkXmJWrBpjv0zoPX1GhTprB1UFUe93FzGNnMEPIMK4Pnfyg","CmRaAAAAdKCEzX0SCANfdaDqz6GZuOJvgi0-jmA49a_AaLF8ATDtWbG1spfDXYdgeVOnl0NCb6U2afsz8JwTRzgSpZyqXVCflhfkm6P632EuY5BpmZvgF8zKNjEa4u2HYiyaDrirEhBGyIXHbSIAi1ZzohgL4Fd6GhQD_FOGDVgcTQWB_Lzdj6ZfnrV_5g","CmRaAAAAmJqPGVDDZCfGqYcZpaObJpFiDlceP5K4nsa8ILb-Mgladro0VCAFN9Z1rhz0zlNnStM6xUI4YTCoUjEFlL6ceDGsLLNbxJ9daXQ6huz0R3FiAAZRtY-REBxlsNtRRxOhEhAXDD9JaQmwo3MUXYS6tAjlGhRc7CsSX5M_Gks7YP-Xx4Mimk7FZA","CmRaAAAADe9gr6JHmXJkn62ci0knLi2sgbdAzzKRCzSGOcvCvnkoSvlZK6l37Kha2TqjzHei36sC8zuVg3hQPyDF1_zZUoakesYVAW5zy3UUZi6kmacTVdi9_soWpfB5gSf1LeFgEhA_EV79CFhd3T3X8nVqU9_IGhTKBwB4RJkdMdfuy4cmaXrKpafmgA","CmRaAAAAYx-diM6foETcS1kiASkmAS27P8y-2eF9D6d16UYcFfERyQ74quLUuwWlOJK_T5C761Nbv_Yh9AdvPdIyqokf3SsGF82zCAjOXF4lnb06k15e1_IWsvI2xMDn1AH7CwqfEhDb9NzKzUkTmf56aUnbv2DeGhS4dBqb2Qr0tn4Ps9tRGNvB6otXwQ","CmRaAAAAZGzfDtQEu9DAaycEmL0xvALRilnFs3VZBMM0dELfFk_ku1mTqL90aLwL7bu5fmvC-JaQ7ds6lZamifLDc62fkO93VDyvAMaiClsTdGkBo-h7YenXDLnsmytCnd1-q4maEhBdJ_HlGC7XmmmwBYOpHhPAGhQrqbniGJX8rCPS0uNun-VlBxTFBQ","CmRaAAAA66Ui4K_QSzfdLsRV2xDuSEE8g2SP38Y--X18ShmQK7pR4qwqjgR1uWO4tUTJkCO8jcP_clr1r2cdWqYhPGYVRGPizCO9BfHzHvfw5rRT5q3EHrCYC_KoXtA32UhNEIZcEhDeIyAujArgTFvd8oWCE_ZSGhTmn3VWgBgTSaERJdfIaVee6cVdFQ","CmRaAAAArolCK8ZmNG-bbgk8E-SyYQ6-BugyvIhcqdI2erRbuKBlb-tBJfNYOxo38BKMTwY38C8t78N4wYvCAIo2DTZ3577MmBconQV8djAOCZ2Cn4t6c24qN_94xFl-ZJnAFgtFEhCinIsO1Hgkbyz40VzTd5iiGhQj_JFQYcrGNoJ-KycQ8fsVBFV29w","CmRaAAAAEQknssud276wOwLOmfuFtvq86NFpBvVfyjpJULJcjDdg9fQTHikp47rY47YPXG4zzXB0UFsdkDk-VCEESyoa5dvZsXdyLZoxv-U6tAFx4JOMFT84wlEBTUUxv61dDZnzEhDaot9_9gQ6Dsdnk14UCA3MGhTJUnUyKx5OxFTnlH5eWVXjuDEJ0A","CmRaAAAAwGRz3wxjJYjN7xQeEDp3R9X9Ilm7XE3czWjbVRYYlCMRNNQlM2GTiDo6EcpO90voByaYrly4teUj7pfdr7ZAg33UV58vKkTqXWgE2K65t5V6LB8GJPi3sTjZwXfExJ80EhAIPdwP_LWKjXSJC8nPAZApGhT5NdOBRzaR-Og7v5C5mCLlnR8zzQ","CmRaAAAAtkYTDAHIkivWL01O8mHQMllqiBEr927T1b5HSV-9uthMO6uHytPT1KLKgCQ-xvW_Jb3NqT6Irbsy-lRv4Y-a1nIkWT-YH_q3KLIpxwXyvxYeGbO4DwRHYkl-yWO2nfH9EhDOUjF5jj45UlntadO3ibubGhTGsDDna8luzzK--AlgZheYUmbCpQ","CmRaAAAANX-YJzEYar7ULmIhgaIOy9IiMsbNs1KCRXogDne_KpWND76BE2mGBL7LYTuPHOFvjziWpoDdTp__Jm5zazFCXGHeiMAixA9fDHsk9FJdVQqWIPBe6UIcqdKN7rNVXaI8EhAcTvcnwQYehJhwFuiZxYm7GhQQxm2FlQwcvdzKTZX9xOMjrPcUuQ","CmRaAAAAJaMBXOidY3SDtco73f_k9FnE-cNzhpkQG-QisNc1nDPu48bAi8hZ-wb2gjI2UJVefrWX1klFI9kh4ri_SIMVTJI8ngDijQNutbhle19-VwpiimU2IlqvZDwaXHe8IOspEhAk7r1z5BFak53Mje0iSJvZGhRSVavV6jKbhz56MCIPbGRro5CpXA","CmRaAAAAot3IhVO8-ZeeRq9Mg6EEEnM6UdCAXovpntQ06ceIbPyDmmYQqfM0hoTMVeCJU70HcicFNi_Aa7pVFB7w0jSpQREMIcFXWlFj-yuLUcosndRLS3N8KHFl90fSkKl1nL3DEhD4uJPhFM57MN_-OyqjSlGnGhSvCB2I32Lfg1y52simo0srBzye6w"]
  var coordArray = [[32.9926742,-117.1159315],[32.840147,-117.036998],[33.0175881,-117.024536],[32.971054,-116.688326],[33.00490319999999,-117.2633145],[32.85377,-116.8844017],[32.8320906,-117.098583],[32.97749019999999,-116.9728484],[33.1692003,-117.2851578],[33.0536427,-117.1181574],[32.8861745,-117.2500071],[32.9132822,-116.8814731],[32.9216491,-117.2535292],[32.7755193,-117.1973509],[33.08112549999999,-117.1353297],[32.95853719999999,-117.2536494],[32.9829796,-117.1113107],[33.024839,-116.79692],[33.1708991,-117.2842292],[32.81795199999999,-117.05601]];
  var searchObjectNameLocationAndPhotoID = []
  console.log(nameArray.length)
  console.log(photoIDArray.length)
  console.log(coordArray.length)

  for (i = 0; i < nameArray.length; i++) {
    var attachToPin = {
      name: nameArray[i],
      lat: coordArray[i][0],
      lng: coordArray[i][1],
      photoID: photoIDArray[i]
    }
    searchObjectNameLocationAndPhotoID.push(attachToPin)
  }

  console.log(searchObjectNameLocationAndPhotoID)
console.log("https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+ searchObjectNameLocationAndPhotoID[0].photoID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw")

$(document).ready(function(){
  var container = $("<div>")
  var testImage = $("<img>")
  testImage.attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+ searchObjectNameLocationAndPhotoID[1].photoID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw" )
  container.append(testImage)
  $("#imageContainer").append(testImage)
})