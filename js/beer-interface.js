var initMap = require('./../js/beer.js').initMapModule;

var apiKey = require('./../.env').apiKey;

// $(document).ready(function() {
// //   $('#breweryLocation').click(function() {
// //     var currentBeerObject = new Beer();
// //   currentBeerObject.getBeer();
// //     var city = $('#location').val();
// //     $('#location').val("");
// //     $.get('https://api.yelp.com/v2/search/?location=Portland, Or&limit=20&category_filter=breweries,beerbar' + city + '&appid=' + apiKey).then(function(response) {
// //       $('.showBeer').text("The nearest brewery to you is " + response.businesses.name);
// //     }).fail(function(error) {
// //       $('.showBeer').text(error.responseJSON.message);
// //     });
// //   });
// // });


exports.initMapModule = initMap;
