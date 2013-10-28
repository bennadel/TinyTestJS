require.tinytest.directive(
	"ttAutoRun",
	function( $, $window, $location ) {

		// I bind the scope to the ui events.
		function link( $scope, element, attributes ) {

			var win = $( $window );

			win.on(
				"focus.ttAutoRun",
				function( event ) {

					console.log( "Auto-run, make it so!" );

					// $window.location = $window.location;

				}
			);

		}


		// Return the directive configuration.
		return({
			link: link,
			scope: false
		});

	}
);