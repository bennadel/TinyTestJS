require.tinytest.factory(
	"stacktraceService",
	function( printStackTrace ) {

		return({
			getStackTrace: function( exception ) {

				return(
					printStackTrace({ e: exception }) 
				);

			}
		});

	}
);