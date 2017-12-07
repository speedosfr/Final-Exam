module.exports = function (config) {
    config.set({
	    basePath: '',
	    frameworks: ['jasmine'],
	    files: [
		    'src/**/*.js',
		    'spec/**/*.spec.js'
	    ],
	    preprocessors: {
		'src/*.js': ['coverage']
	    },
	    plugins: [
		     'karma-jasmine',
		      'karma-phantomjs-launcher',
		      'karma-coverage'
	    ],
	    reporters: ['progress', 'coverage'],
	    port: 9878,
	    colors: true,
	    logLevel: config.LOG_INFO,
	    browsers: ['PhantomJS'],
	    singleRun: true,
	    concurrency: Infinity,
	    coverageReporter: {
		includeAllSources: true,
		dir: 'coverage/',
		reporters: [
                  { type: "html", subdir: "html" },
                  { type: 'text-summary' }
                ]
	    }
	});
};
