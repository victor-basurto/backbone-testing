Congo.DatabaseView = Backbone.View.extend({
	tagName: "tr",
	events: {
		'click a': 'sayHello',
		'click button': 'sayHello'
	},
	sayHello: function() {
		alert('hello from DatabaseView');
	},
	render: function() {
		// apply the template
		var template = $('#database-list-template').html();
		var compiled = _.template(template, {item: 'vic'});
		// $(this.el).html("<td><a href='#'>DB Name</a></td>");
		$(this.el).html(compiled);
		return this;
	}
});

Congo.DatabaseListView = Backbone.View.extend({
	tagName: 'table',
	className :'table table-striped',
	render: function() {
		var els = [];
		// print 5 times the itemView 
		for( var i = 0; i < 5; i++ ) {
			var itemView = new Congo.DatabaseView();
			// $(this.el).append(itemView.render().el);
			els.push(itemView.render().el);
		}
		$(this.el).html(els);
		// return this;
		$('#database-list').html(this.el);
	}
});