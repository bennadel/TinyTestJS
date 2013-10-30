define(
	[
		// "lib/MyModuleA",
		// "lib/MyModuleB"
	],
	function( /* ModuleA, ModuleB */ ) {

		return({

			// I run ONCE before ANY the test methods have executed.
			beforeTests: function() {

				this.info( "beforeTests()" );

			},


			// I run ONCE after ALL the test methods have executed.
			afterTests: function() {

				this.info( "afterTests()" );

			},


			// Sample test method...
			testThatThisRuns: function() {

				// Runs failure... if you uncomment any of the following.

				// this.assert( true == false );
				// this.assertIsValidEmail( "ben nadel" );
				
			},


			// Sample test method...
			testThatThatRuns: function() {

				// Runs successfully...	
				this.assert( true );
			
			},


			// Non-test method. Since this method name does not start with "test", it should
			// not be invoked by TinyTestJS. This method will, however, be available to your
			// other test methods.
			// --
			// If this method should be shared across test cases, consider putting it in the
			// "TestCase.js" file located within this same directory.
			proveThatNonStandardNamesWillNotRun: function() {

				this.fail( "Non-test method invoked incorrectly." );

			}
			
		});

	}
);