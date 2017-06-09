var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.8800604, lng: -117.2340135 },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    //markers
    var geoloc = [0, 0]
    var position = { lat: geoloc[0], lng: geoloc[1] }
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

var query = "hiking"
var searchObjectNameLocationAndPhotoID = []


$.ajax({
    url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + query + "&location=32.7157380,-117.1610840&radius=50000&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"

}).done(function(response) {
    var items = response.results;
    console.log(items)
    for (let value of items) {
        var attachToPin={};
        var lat = value.geometry.location.lat
        var lng = value.geometry.location.lng
        console.log(lat, lng);
        var photoID = value.photos && value.photos[0].photo_reference
        var name = value.name
        var placeID = value.place_id
        $.ajax({
            url: "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw"
        }).done(function(response) {
            var description = response.result.reviews;
            console.log(description);
            console.log(response);
            attachToPin = {
                description: description[0].text
            }
            searchObjectNameLocationAndPhotoID.push(attachToPin)

        })


    }
    console.log(searchObjectNameLocationAndPhotoID);
    // return searchObjectNameLocationAndPhotoID
})

/*
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

$(document).ready(function(){
  var container = $("<div>")
  var testImage = $("<img>")
  testImage.attr("src", "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+ searchObjectNameLocationAndPhotoID[1].photoID + "&key=AIzaSyBSmftseE9huym0ariNTCamMnQmMZYaDYw" )
  container.append(testImage)
  $("#imageContainer").append(testImage)
})
 

*/
