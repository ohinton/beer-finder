var initMap = require('./../js/cemetery.js').initMapModule;

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
   $('#cemeteryLocation').click(function() {
     var location = $('#location').val();
     $.get('https://maps.googleapis.com/maps/api/place/radarsearch/json?location=45.5231,-122.6765&radius=500&type=cemetery&key=AIzaSyCvkXpUhaIqG7IaTZwqCKM-sEkBBkrXwLQ').then(function(response) {
       $('.showCemetery').text("The nearest cemetery to you is " + result.name);
     }).fail(function(error) {
       $('.showCemetery').text(error.responseJSON.message);
     });
   });
 });


exports.initMapModule = initMap;
