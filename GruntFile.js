module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		protractor : {
			options : {
				configFile : "Configuration/conf.js",
				keepAlive : true,
				noColor : false,
				debug : false,
				webdriverManagerUpdate:true,
				args : {}
			},
			your_target : {
				options : {
					configFile : "Configuration/conf.js",
					args : {}
				}
			},
		}
	});

	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.registerTask('sample', [ 'protractor', ]);
};