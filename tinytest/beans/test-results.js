require.tinytest.factory(
	"TestResults",
	function() {

		// I initialize the test results.
		function TestResults() {

			// For duration of testing.
			this.startTime = this.getTickCount();	
			this.endTime = 0;

			// The number of test methods that have been executed.
			this.testCount = 0;

			// Will contain the first error that is raised during testing.
			this.error = null;


		}


		// Define the instance methods.
		TestResults.prototype = {

			endTestingWithError: function( error ) {

				if ( this.isComplete() ) {

					throw( new Error( "Testing is already complete." ) );

				}

				this.endTime = this.getTickCount();

				this.error = error;				

			},


			endTestingWithSuccess: function() {

				if ( this.isComplete() ) {

					throw( new Error( "Testing is already complete." ) );

				}

				this.endTime = this.getTickCount();

			},


			getDuration: function() {

				if ( this.isComplete() ) {

					return( this.endTime - this.startTime );

				}

				return( this.getTickCount() - this.startTime );

			},


			getError: function() {

				return( this.error );

			},


			getTestCount: function() {

				return( this.testCount );

			},


			getTickCount: function() {

				return( ( new Date() ).getTime() );

			},


			incrementTestCount: function() {

				this.testCount++;

			},


			isComplete: function() {

				return( this.endTime !== 0 );

			},


			isFailed: function() {

				if ( ! this.isComplete() ) {

					throw( new Error( "Testing is not complete." ) );

				}

				return( this.error !== null );

			},


			isPassed: function() {

				if ( ! this.isComplete() ) {

					throw( new Error( "Testing is not complete." ) );

				}

				return( this.error === null );

			}

		};


		return( TestResults );

	}
);