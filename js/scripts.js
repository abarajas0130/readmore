$('article').readmore({
	moreLink: '<a href="#"><em>Get The Good!</em></a>',
	lessLink: '<a href="#">Close it up!</a>',
	speed: 2000,
	afterToggle: function() {
		alert('Its Closed Open It!')
	}
});