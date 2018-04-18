function search() {
	$("#column1").empty();
	$("#column2").empty();
	$("#column3").empty();
	$("#column4").empty();
	var user = $("#search").val();
	var url = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key='+ api_key;	
	if ($("#text").is(":checked")) {  
		url = url + "&text=" + $("#textInput").val();
	}
	if ($("#min_upload_date").is(":checked")) {  
		url = url + "&min_upload_date=" + $("#min_upload_dateInput").val();
	}
	if ($("#max_upload_date").is(":checked")) {  
		url = url + "&max_upload_date=" + $("#max_upload_dateInput").val();
	}
	if ($("#group_id").is(":checked")) {  
		url = url + "&group_id=" + $("#group_idInput").val();
	}
	if ($("#media").is(":checked")) {  
		url = url + "&media=" + $("#mediaInput").val();
	}
	if ($("#text").is(":checked")) {  
		url = url + "&text=" + $("#textInput").val();
	}
	
	url = url + '&format=json&nojsoncallback=1';

	$.getJSON(url ,
		showImages
	)

	function showImages(images) {
		var i;
		for (i = 0; i < images.photos.photo.length; i++) {
			var item = images.photos.photo[i];
			var url = 'https://farm' + item.farm + ".staticflickr.com/" + item.server
				+ '/' + item.id + '_' + item.secret + '.jpg';
			console.debug(url);
			switch (i % 4) {
				case 0:
					$("#column1").append($("<img/>").attr({
						"class": "mx-auto d-block img-fluid",
						"src": url
					})
					);
					break;
				case 1:
					$("#column2").append($("<img/>").attr({
						"class": "mx-auto d-block img-fluid",
						"src": url
					})
					);
					break;
				case 2:
					$("#column3").append($("<img/>").attr({
						"class": "mx-auto d-block img-fluid",
						"src": url
					})
					);
					break;
				case 3:
					$("#column4").append($("<img/>").attr({
						"class": "mx-auto d-block img-fluid",
						"src": url
					})
					);
					break;
			}
		}
	}

}
