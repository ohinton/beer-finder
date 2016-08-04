window.initMap = function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 45.5231, lng: -122.6765},
        zoom: 12
    });
  };

  // var map;
  // var service;
  // var infowindow;
  //
  // function initialize() {
  //   var portland = new google.maps.LatLng(45.5231, -122.6765);
  //
  //   map = new google.maps.Map(document.getElementById('map'), {
  //       center: portland,
  //       zoom: 15
  //     });
  //
  //   var request = {
  //     location: portland,
  //     radius: '500',
  //     types: ['cemetery']
  //   };
  //
  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, callback);
  // }
  //
  // function callback(results, status) {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       var place = results[i];
  //       createMarker(results[i]);
  //     }
  //   }
  // }

exports.initMapModule = initMap;
