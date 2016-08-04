var initMap = require('./../js/cemetery.js').initMapModule;

var apiKey = require('./../.env').apiKey;

$( document ).ready(function() {
  $('#locateUser').click(locateUser);
});


function locateUser() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}


function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  var marker=new google.maps.Marker({
    map: mapObject,
    position: userLatLng,
    icon:'img/tombstone.png'}
  );
}


function geolocationError(positionError) {
  alert(positionError);
}



// marker.setMap(map);
exports.initMapModule = initMap;
