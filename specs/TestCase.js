define({

	// I [loosely] assert that the given value is a valid email address.
	assertIsValidEmail: function( email ) {

		if ( ! /[^@]+@[^.]+(\.[^.]+)+/i.test( email ) ) {

			this.fail( "Expected [" + this.stringify( email ) + "] to be a valid email address." );

		}

	}

});