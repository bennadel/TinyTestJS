require.tinytest.controller(
	"AppController",
	function( $scope, require, specs, TestSuite, _ ) {

		// I determine the status of the testing.
		$scope.testStatus = "start";

		// I keep track of the test cases and the selected test cases.
		$scope.testCases = buildTestCaseCollection( specs );
		$scope.selectedTestCases = [];

		// I determine if test cases are currently being executed.
		$scope.isRunningTests = false;

		// Form inputs (for ng-model bindings).
		$scope.form = {
			filter: "",
			autoRun: false
		};


		// ---
		// PUBLIC METHODS.
		// ---


		// I run the selected test cases.
		$scope.runTests = function() {

			// If the tests are currently running, ignore the request.
			if ( $scope.isRunningTests ) {

				return;

			}

			var testCases = updateSelectedTestCases();

			// Ignore run request if no test cases have been selected.
			if ( ! testCases.length ) {

				return;

			}

			$scope.isRunningTests = true;

			require(
				getTestCaseModuleUrls( testCases ),
				function success() {

					// Create a new instance of test suite for the definened specifications.
					var testSuite = new TestSuite( arguments );

					var results = testSuite.runTestsCases();

					$scope.isRunningTests = false;

					$scope.testStatus = ( results.isPassed() ? "pass" : "fail" );
					
				},
				function error( error ) {

					console.error( error );

					alert( "One of your test cases failed to load (see console)." );

					$scope.isRunningTests = false;

				}
			);

		};


		// I select all the available test cases.
		$scope.selectAllTestCases = function() {

			for ( var i = 0 ; i < $scope.testCases.length ; i++ ) {

				$scope.testCases[ i ].isSelected = true;

			}

		};


		// ---
		// PRIVATE METHODS.
		// ---


		// I convert the list of test case names into something we can render with selectability.
		function buildTestCaseCollection( specs ) {

			var testCases = _.map(
				specs,
				function( specName ) {

					return({
						name: specName,
						isSelected: false
					});

				}
			);

			return( testCases );

		}


		// I build a collection of cache-busting URLs for the given, selected test cases. The 
		// cache-busting ensures that RequireJS will reload the given script each time it is
		// requested, rather than pulling it out of the module cache.
		function getTestCaseModuleUrls( testCases ) {

			var now = ( new Date() ).getTime();

			var testCaseUrls = _.map(
				testCases,
				function( testCase ) {

					return( "specs/" + testCase.name + ".js?ttTestCaseBust=" + now );

				}
			);

			return( testCaseUrls );

		}


		// I update the collection of selected test cases (and return the collection).
		function updateSelectedTestCases() {

			$scope.selectedTestCases = _.filter(
				$scope.testCases,
				function( testCase ) {

					return( testCase.isSelected );

				}
			);

			return( $scope.selectedTestCases );

		}

	}
);