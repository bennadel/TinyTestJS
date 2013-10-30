require.tinytest.directive(
	"ttErrorHandler",
	function( $, $window, $location ) {

		// I bind the scope to the ui events.
		function link( $scope, element, attributes ) {

			// Catch any errors that bubble up to the root of the document.
			$window.onerror = function( error ) {

				$scope.$apply(
					function() {

						$scope.handleUncaughtException( error );

					}
				);

			};
				
		}


		// Return the directive configuration.
		return({
			link: link,
			scope: false
		});

	}
);