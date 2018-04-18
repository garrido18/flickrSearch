function search() {
var user = $("#search").val();
$("#image-container").empty();
$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=' 
	 + api_key + '&user_id=' + user + 
	'&format=json&nojsoncallback=1',
	showImages
)

function showImages(images){
	var i;
	for (i=0;i<images.photos.photo.length;i++) {
	   var item = images.photos.photo[i];
	   var url = 'https://farm'+item.farm+".staticflickr.com/"+item.server
		          +'/'+item.id+'_'+item.secret+'_m.jpg';
	   console.debug(url);
	   $("#image-container").append($("<img/>").attr("src",url));
    }
}

}
