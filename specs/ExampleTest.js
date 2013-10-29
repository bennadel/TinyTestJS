define(
	[
		// "lib/MyModuleA",
		// "lib/MyModuleB"
	],
	function() {

		return({

			beforeTests: function() {

				// Runs ONCE before ANY the test methods have executed.

			},


			afterTests: function() {

				// Runs ONCE after ALL the test methods have executed.

			},


			testThatThisRuns: function() {

				// Runs failure... if you uncomment any of the following.

				// this.assert( true == false );
				// this.assertIsValidEmail( "ben nadel" );
				
			},


			testThatThatRuns: function() {

				// Runs successfully...	
			
			},


			proveThatNonStandardNamesWillNotRun: function() {

				// Since this method name does not start with "test", it should not be invoked by TinyTest.
				this.fail( "Non-test method invoked incorrectly." );

			}
			
		});

	}
);