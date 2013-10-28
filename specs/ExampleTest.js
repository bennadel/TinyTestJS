define(
	[
		// "lib/MyModuleA",
		// "lib/MyModuleB"
	],
	function() {

		return({

			testThis: function() {

				console.log( "testThis" );

				this.assertIsValidEmail( "blam" );

			},

			testThat: function() {

				console.log( "testThis" );

			}

		});

	}
);