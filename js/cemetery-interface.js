var initMap = require('./../js/cemetery.js').initMapModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#locateCemeteries').click(function() {

  var locations = [
    ['Lincoln Memorial Park', 45.460181, -122.544133, 9],
    ['Willamette National Cemetery', 45.459955, -122.543106, 8],
    ['Historic Columbian Cemetery', 45.584231, -122.678376, 7],
    ['Grand Army of the Republic Cemetery', 45.460220, -122.682163, 6],
    ['Rose City Cemetery', 45.550234, -122.609496, 5],
    ['Lone Fir Cemetery', 45.5184, -122.6422, 4],
    ['River View Cemetery', 45.4654, -122.6732, 3],
    ['Mount Calvary Cemetery', 45.5187, -122.7356, 2],
    ['Multnomah Park Cemetery', 45.4902, -122.5789, 1],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(45.5231, -122.6765),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon:'img/tombstone.jpg'}
    );

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      };
    })(marker, i));
  }
});
});


exports.initMapModule = initMap;
