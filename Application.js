// Configure the path mappings for the modules in your application. These paths
// are relative to the current directory (which probably called something like
// "tests/" or "tests/client/"). These path-prefixes can be used to load dependencides
// in the test-cases located within the "specs/" directory.
// --
// NOTE: Exclude the trailing forward-slash.
require.config({
	paths: {
		app: "../../app",
		lib: "../../app/lib"
	}
});

// NOTE: TinyTestJS makes the "lodash" module available via the "lodash" handle. It
// will call .noConflict() in case your application already requires lodash or the 
// underscore library.

// Since JavaScript cannot read the local file-system, you have to tell TinyTest.js
// which test-cases that it can find in the "specs/" directory. You will only be 
// able to run the test cases listed here.
// --
// NOTE: Exclude the trailing ".js" file extension.
require.specs = [
	"ExampleTest"
];

