require.tinytest.factory(
	"require",
	function( $rootScope, $log ) {

		// Since the callbacks in the RequireJS module will take the control-flow outside 
		// of the normal AngularJS context, we need to create a proxy that will automatically
		// alert AngularJS to the execution of the callback. Plus, this gives us an opportunity
		// to add some error handling.
		function requireProxy( dependencies, successCallback, errorCallback ) {

			// Make sure the callbacks are defined - makes the logic easier down below.
			successCallback = ( successCallback || angular.noop );
			errorCallback = ( errorCallback || agular.noop );

			require(
				( dependencies || [] ),
				function successCallbackProxy() {

					var args = arguments;

					$rootScope.$apply(
						function() {

							successCallback.apply( this, args );

						}
					);

				},
				function errorCallbackProxy() {

					var args = arguments;

					$rootScope.$apply(
						function() {

							errorCallback.apply( this, args );

						}
					);

				}
			);

		}


		return( requireProxy );

	}
);