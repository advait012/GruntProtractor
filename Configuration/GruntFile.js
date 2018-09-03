module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('../package.json'),
		protractor : {
			options : {
				configFile : "./conf.js",
				keepAlive : true,
				noColor : false,
				debug : false,
				webdriverManagerUpdate:false,
				args : {}
			},
			your_target : {
				options : {
					configFile : "./conf.js",
					args : {}
				}
			},
		}
	});
	grunt.file.setBase('../node_modules/');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.registerTask('sample', [ 'protractor', ]);
};