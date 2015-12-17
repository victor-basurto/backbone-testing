// extend the view
Congo.BreadcrumbView = Backbone.View.extend({
	// render the elements into the DOM
	render: function() {
		$(this.el).html("<li><a href='#'><h3>DATABASES</h3></a></li>");
		return this;
	},
	// create events
	events: {
		'click a': 'welcome' // once user clicks on <a> trigger the welcome();
	},
	// declare the function to be called
	welcome: function() {
		alert('hello');
	}
});