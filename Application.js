// Configure the base path and and additional path mappings for the modules in your 
// application. This allows your target modules to load dependencies relative to the
// paths they would normally use.
require.config({
	baseUrl: "../../app/lib/",
	paths: {
		/* Moar path definitions */
	}
});

// Since JavaScript cannot read the local file-system, you have to tell TinyTest.js
// which test-cases that it can find in the "specs/" directory. You will only be 
// able to run the test cases listed here.
// --
// NOTE: Exclude the trailing ".js" file extension.
require.specs = [
	"ExampleOfGoodTest",
	"ExampleOfNotGoodTest"
];