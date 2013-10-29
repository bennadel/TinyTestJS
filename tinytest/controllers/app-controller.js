require.tinytest.controller(
	"AppController",
	function( $scope, $location, _ ) {

		$scope.testStatus = "start";

		$scope.testCases = _.map(
			require.specs,
			function( testCaseName ) {

				return({
					name: testCaseName,
					isSelected: false
				});

			}
		);

		console.log( $scope.testCases );
				
		$scope.isRunningTests = false;

		$scope.selectedTestCount = 0;

		$scope.form = {};

		$scope.form.filter = "";
		$scope.form.autoRun = !! ( $location.search().autoRun || false );


		// ---
		// PUBLIC METHODS.
		// ---


		$scope.runTests = function() {

			console.log( "Run..." );

			require(
				[
					( "specs/ExampleTest.js?ttTestBust=" + Date.now() )
				],
				function( foo ) {

					console.log( foo );

				}
			);


		};


		$scope.selectAllTestCases = function() {

			console.log( "Select all" );

		};


		// ---
		// PRIVATE METHODS.
		// ---

	}
);