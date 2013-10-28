require.tinytest.controller(
	"AppController",
	function( $scope, $location ) {


		$scope.testStatus = "start";

		$scope.testCases = require.specs;
				
		$scope.isRunningTests = false;

		$scope.selectedTestCount = 0;

		$scope.form = {};

		$scope.form.autoRun = !! ( $location.search().autoRun || false );


		// ---
		// PUBLIC METHODS.
		// ---


		$scope.runTests = function() {

			console.log( "Run..." );

		};


		$scope.selectAllTestCases = function() {

			console.log( "Select all" );

		};


		// ---
		// PRIVATE METHODS.
		// ---


	}
);