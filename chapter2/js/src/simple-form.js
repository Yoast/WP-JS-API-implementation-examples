$( function () {
	var form = "<div>" +
	     "<section>" +
	        "<label for='title'>Title</label><input type='text' id='title' name='title' />" +
	     "</section>" +
	     "<section>" +
	        "<label for='slug'>Slug</label><input type='text' id='slug' name='slug'/>" +
	     "</section>" +
	     "<section>" +
	        "<label for='content'>Content</label><textarea name='content' id='content' cols='60' rows='10'></textarea>" +
	     "</section>" +
	     "<section>" +
             "<label for='excerpt'>Excerpt</label><textarea name='excerpt' id='excerpt' cols='60' rows='10'></textarea>" +
	     "</section>" +
     "</div>";

	$( "#root" ).append( form );
} );
