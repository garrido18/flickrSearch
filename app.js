var page = 0;

function search() {

	
	$("#column0").empty();
	$("#column1").empty();
	$("#column2").empty();
	$("#column3").empty();
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' + api_key;
	if ($("#userInput").val() != '') {
		url = url + "&user_id=" + $("#userInput").val();
	}
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
	url = url + "&content_type=" + $('#type').val();
	if(url.length <= 130){
		url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.getRecent&api_key=' + api_key;
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

$( function() {
	$.datepicker.setDefaults($.datepicker.regional["es"]);
	$( "#min_upload_dateInput" ).datepicker();
	$( "#max_upload_dateInput" ).datepicker();
	$( "#min_taken_dateInput" ).datepicker();
	$( "#max_taken_dateInput" ).datepicker();
} );