/*
 * Generated on 2014-10-08
 * generator-prototype v0.4.61
 * http://prototype-generator.com/
 *
 * Copyright (c) 2014 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function (grunt) {

	// load only used tasks
	require('jit-grunt')(grunt, {
		cmq: 'grunt-combine-media-queries',
		replace: 'grunt-text-replace'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	var options = {
		// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: "helpers/_grunt/*.js"
		},
		// define your path structure
		paths: {
			// helpers folder with grunt tasks and styleguide templates, tests and photobox
			helper: 'helpers',
			// resources folder with working files
			src: 'resources',
			// dist folder
			dist: '_dist',
			// dev/working folder
			dev: '_output'
		},
		// define your ports for grunt-contrib-connect
		ports: {
			app: 9000,
			test: 9001,
			livereload: 35729
		},
		pkg: grunt.file.readJSON("package.json")
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	// Simple Tasks

	// Grunticon: Build your icons
	grunt.registerTask('icons', [
		'grunticon',
		'clean:grunticon',
		'replace'
	]);
	grunt.registerTask('watchCSS', [
		'fileindex',
		'sass:dist'
	]);
	grunt.registerTask('watchJS', [
		'sync:js'
	]);
	// Check your HTML
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// Check you JS
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautify your JS and HTML
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);


	// Advanced Tasks
	grunt.registerTask('server', [
		'newer:assemble',
		'concurrent:syncing',
		'watchCSS',
		// 'connect:livereload',
		'browserSync',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dev',
		'concurrent:syncing',
		'watchCSS',
		'cmq',
		// 'dataSeparator',
		'autoprefixer',
		'cssmin',
		'concurrent:build',
		'check-js',
		'check-html'
	]);

	grunt.registerTask('default', [
		'server'
	]);

	grunt.registerTask('serve', [
		'server'
	]);

	grunt.registerTask('dist', [
		'clean',
		'version:patch',
		'build',
		'copy:dist'
	]);
};