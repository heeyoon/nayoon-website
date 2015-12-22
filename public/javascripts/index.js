// See handlebarsjs.com for details. Here, we register
// a re-usable fragment of HTML called a "partial" which
// may be inserted somewhere in the DOM using a function
// call instead of manual insertion of an HTML String.

// A few global convenience methods for rendering HTML
// on the client. Note that the loadPage methods below
// fills the main container div with some specified 
// template based on the relevant action.

var loadPage = function(template, data) {
	data = data || {};
	$('#main-container').html(Handlebars.templates[template](data));
};

var loadHomePage = function() {
	loadPage('index');
};

// var loadNotesPage = function() {
// 	$.get('/notes', function(response) {
// 		loadPage('notes', { notes: response.content.notes, currentUser: currentUser });
// 	});
// };

$(document).ready(function() {
	$.get('/', function(response) {
		loadHomePage();
	});
});


$(document).on('click', '#home-button', function(evt) {
	evt.preventDefault();
	loadHomePage();
});

$(document).on('click', '#about-button', function(evt) {
	evt.preventDefault();
	loadPage('about');
});

$(document).on('click', '#test-prep-button', function(evt) {
	evt.preventDefault();
	loadPage('test-prep');
});

$(document).on('click', '#tutoring-button', function(evt) {
	evt.preventDefault();
	loadPage('tutoring');
});

$(document).on('click', '#blog-button', function(evt) {
	evt.preventDefault();
	loadPage('blog');
});

$(document).on('click', '#contact-button', function(evt) {
	evt.preventDefault();
	loadPage('contact');
});