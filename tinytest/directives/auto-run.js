require.tinytest.directive(
	"ttAutoRun",
	function( $, $window, $location ) {

		// I bind the scope to the ui events.
		function link( $scope, element, attributes ) {

			$( $window ).on( 
				"focus.ttAutoRun",
				function() {

					if ( ! $scope.form.autoRun ) {

						return;

					}

					$scope.runTests();

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