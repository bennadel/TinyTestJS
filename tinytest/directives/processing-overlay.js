require.tinytest.directive(
	"ttProcessingOverlay",
	function( $ ) {

		// I bind the scope to the ui events.
		function link( $scope, element, attributes ) {

			// Since the tests will never be running when the page loads, start with the element 
			// hidden from view.
			element.hide();

			// Show and hide the overlay as the tests are run.
			$scope.$watch(
				"isRunningTests",
				function( newValue, oldValue ) {

					// Ignore initial configuration of watcher.
					if ( newValue === oldValue ) {

						return;

					}

					if ( newValue ) {

						showOverlay();

					} else {

						hideOverlay();

					}

				}
			);


			// ---
			// PRIVATE METHODS.
			// ---


			// Hide the overlay.
			function hideOverlay() {

				element
					.stop( true )
					.fadeOut( 200 )
				;

			}


			// Show the overlay.
			function showOverlay() {

				element
					.delay( 500 )
					.fadeIn( 200 )
				;

			}

		}


		// Return the directive configuration.
		return({
			link: link,
			scope: false
		});

	}
);