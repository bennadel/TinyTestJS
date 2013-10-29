require.tinytest.factory(
	"TestSuite",
	function( TestCase, proxyTestCaseMethods, TestResults, _ ) {

		// I initialize the test suite.
		function TestSuite( specs ) {

			this.testCases = this.buildTestCasesFromSpecs( specs );

			this.results = null;

		}


		// Define the instance methods.
		TestSuite.prototype = {

			buildTestCasesFromSpecs: function( specs ) {

				var testCases = _.map(
					specs,
					function( spec ) {

						return( new TestCase( proxyTestCaseMethods, spec ) );

					}
				);

				return( testCases );

			},


			getTestMethodNames: function( testCase ) {

				var methodNames = [];

				for ( var key in testCase ) {

					if ( this.isTestMethodName( key ) ) {

						methodNames.push( key );

					}

				}

				return( methodNames );

			},


			isTestMethodName: function( methodName ) {

				// All test methods must start with the term, "test". 
				return( /^test/i.test( methodName ) );

			},


			runTestMethod: function( testCase, methodName ) {

				testCase.setup();

				testCase[ methodName ]();

				testCase.teardown();

			},


			runTestsCases: function() {

				this.results = new TestResults();

				try {

					for ( var i = 0, length = this.testCases.length ; i < length ; i++ ) {

						this.runTestsInTestCase( this.testCases[ i ] );

					}

					this.results.endTestingWithSuccess();

				} catch ( error ) {

					this.results.endTestingWithError( error );

				}

				return( this.results );

			},


			runTestsInTestCase: function( testCase ) {

				testCase.beforeTests();

				// When running the tests, we want to stop on failure; however, we also want to make
				// sure that we always run the after-tests teardown.
				try {			

					var testMethodNames = this.getTestMethodNames( testCase );

					for ( var i = 0, length = testMethodNames.length ; i < length ; i++ ) {

						this.results.incrementTestCount();

						this.runTestMethod( testCase, testMethodNames[ i ] );

					}
					
				// Rethrow errors - we want to prevent future tests.
				} catch( error ) {

					throw( error );

				// Guarantee that after tests run.
				} finally {
					
					// Execute after
					testCase.afterTests();

				}

			}

		};


		return( TestSuite );

	}
);