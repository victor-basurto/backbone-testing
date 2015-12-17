Congo = {
	init: function() {
		// create an instance of BreadcrumbView
		var breadcrumbView = new Congo.BreadcrumbView({el: '#breadcrumbs'});
		// trigger the render() so elements can be rendered in the DOM
		breadcrumbView.render();

		

		var dbListView = new Congo.DatabaseListView();
		dbListView.render();
	}
}