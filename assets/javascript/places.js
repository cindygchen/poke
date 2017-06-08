var query = "hiking"
var searchObjectNameLocationAndPhotoID = []


$.ajax({
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
    for (i = 0; i < nameArray.length; i++) {
    var attachToPin = {
      name: nameArray[i],
      lat: coordArray[i][0],
      lng: coordArray[i][1],
      photoID: photoIDArray[i]
    }
    searchObjectNameLocationAndPhotoID.push(attachToPin)
  }

  return searchObjectNameLocationAndPhotoID
})