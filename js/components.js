/**
 Core layout handlers and component wrappers
 **/

// BEGIN: Layout Mega Menu
var LayoutSidebarMenu = function () {

	return {
		//main function to initiate the module
		init: function () {
			$('.c-layout-sidebar-menu > .c-sidebar-menu .c-toggler').on('click', function (e) {
				e.preventDefault();
				$(this).closest('.c-dropdown').toggleClass('c-open');
			});
		}
	};
}();
// END


// Main theme initialization
$(document).ready(function () {
	// init layout handlers

	LayoutSidebarMenu.init();


});