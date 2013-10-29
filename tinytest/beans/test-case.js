require.tinytest.factory(
	"TestCase",
	function( _ ) {

		// I initialize the test case with the given spec definition.
		function TestCase( proxyTestCaseMethods, specTestCaseMethods ) {

			// Override the abstract methods with the proxy test case first, then the spec test case.
			// This way, the spec test case methods have the highest precedence. 
			_.extend( this, proxyTestCaseMethods, specTestCaseMethods );

		}


		// Define the class methods.
		TestCase.prototype = {

			// I get called once after all the test methods have executed.
			afterTests: function() {

				// Abstract method...

			},


			// I am a short-hand for the assertTrue() method.
			assert: function( value ) {

				this.assertTrue( value );

			},


			// I test to see if the supplied values are equal or not.
			assertEquals: function( valueA, valueB ) {

				if ( valueA != valueB ) {

					this.fail( "Expected [" + this.stringify( valueA ) + "] to equal [" + this.stringify( valueB ) + "]." );

				}

			},


			// I test to see if the supplied value is equal to False.
			assertFalse: function( value ) {

				if ( value ) {

					this.fail( "Expected [" + this.stringify( value ) + "] to be falsey." );

				}

			},


			// I test to see if the supplied values are equal or not.
			assertNotEquals: function( valueA, valueB ) {

				if ( valueA == valueB ) {

					this.fail( "Expected [" + this.stringify( valueA ) + "] to not equal [" + this.stringify( valueB ) + "]." );

				}

			},


			// I test to see if the supplied value is equal to True.
			assertTrue: function( value ) {
				
				if ( ! value ) {

					fail( "Expected [" + this.stringify( value ) + "] to be truthy." );
				}

			},


			// I get called once before any tests methods have executed.
			beforeTests: function() {

				// Abstract method...

			},


			// I send a failure message back to the calling application.
			fail: function( message ) {

				throw( new Error( "tinytest.AssertionFailed" ) );

			},


			// I get called before every test method is executed.
			setup: function() {

				// Abstract method...

			},


			// I convert the given value to a string for use with string concatenation.
			stringify: function( value ) {

				var undefined;

				if ( value === null ) {

					return( "null" );

				}

				if ( value === undefined ) {

					return( "undefined" );

				}

				return( value.toString() );

			},


			// I get called after every test method has executed.
			teardown: function() {

				// Abstract method...

			}

		};


		return( TestCase );

	}
);