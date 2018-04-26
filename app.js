var page = 0;
var lat = null;
var lng = null;


function search() {

	
	$("#column0").empty();
	$("#column1").empty();
	$("#column2").empty();
	$("#column3").empty();
<<<<<<< HEAD
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' + api_key;
=======
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' + api_key + "&user_id=20154996@N00";
>>>>>>> 19e4563f498e927af2db439b4483750abfab58ed
	if ($("#textInput").val() != '') {
		url = url + "&text=" + $("#textInput").val();
	}
	if ($("#max_upload_dateInput").val() != '') {
		url = url + "&max_upload_date=" + $("#max_upload_dateInput").val();
	}
	if ($("#min_upload_dateInput").val() != '') {
		url = url + "&min_upload_date=" + $("#min_upload_dateInput").val();
	}
	if ($("#group_idInput").val() != '') {
		url = url + "&group_id=" + $("#group_idInput").val();
	}
	if ($("#min_taken_dateInput").val() != '') {
		url = url + "&min_taken_date=" + $("#min_taken_dateInput").val();
	}
	if ($("#max_taken_dateInput").val() != '') {
		url = url + "&max_taken_date=" + $("#max_taken_dateInput").val();
	}
<<<<<<< HEAD
	if($('#location').is(':checked') && lng != null){
		url = url + "&lat" + lat + "&lon" + lng + "&radius=32&radius_units=km" ;
	}
=======
	
>>>>>>> 19e4563f498e927af2db439b4483750abfab58ed
	if(url.length <= 130){
		url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key=' + api_key + "&user_id=20154996@N00";
	}
	url = url + '&format=json&nojsoncallback=1';

	$.getJSON(url,
		showImages
	)

	function showImages(images) {
		var i;
		for (i = 0; i < images.photos.photo.length; i++) {
			var item = images.photos.photo[i];
			var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server
				+ '/' + item.id + '_' + item.secret + '_b.jpg';
			var column = '#column' + i % 4;
			$(column).append($("<a/>").attr({
				"href": url,
				"data-lightbox": "image",
				"id": "image" + i,
			}));
			var image = "#image" + i;
			$(image).append($("<img/>").attr({
				"class": "mx-auto d-block img-fluid",
				"src": url,
			})
			)
		}
	}
}

<<<<<<< HEAD
function showMap(){
	if($('#location').is(':checked')){
		$('#map_canvas').css("display", "block");
	} else {
		$('#map_canvas').css("display", "none");
	}
}



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    var marker = new google.maps.Marker({
        map: map
    });

    map.addListener('click', function (e) {
		placeMarker(e.latLng, map);
    });

    function placeMarker(position, map) {
		marker.setPosition(position);
		lat = marker.getPosition().lat();
		lng = marker.getPosition().lng();
    }
    var infoWindow = new google.maps.InfoWindow({ map: map });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Tu ubicación.');
            map.setCenter(pos);
        }, function () {
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
}


=======
$( function() {
	$.datepicker.setDefaults($.datepicker.regional["es"]);
	$( "#min_upload_dateInput" ).datepicker();
	$( "#max_upload_dateInput" ).datepicker();
	$( "#min_taken_dateInput" ).datepicker();
	$( "#max_taken_dateInput" ).datepicker();
} );
>>>>>>> 19e4563f498e927af2db439b4483750abfab58ed
