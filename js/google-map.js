
var google;

function init() {
    // Basic options for a simple Google Map
    // var myLatlng = new google.maps.LatLng(23.1139717,72.5373672);
    var myLatlng = new google.maps.LatLng(23.1139717,72.5373672);
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['India'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://www.google.com/maps/place/Ganesh+Glory+11+Rd,+Gota,+Ahmedabad,+Gujarat+382481/@23.1139717,72.5399421,17z/data=!3m1!4b1!4m6!3m5!1s0x395e82dc425f98b1:0xd62b93163625c6cf!8m2!3d23.1139717!4d72.5399421!16s%2Fg%2F11l6rqx_dr?entry=ttu', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
