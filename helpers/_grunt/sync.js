module.exports = {
	js: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/js',
				src: '**/*',
				dest: '<%= paths.dev %>/js'
			}
		]
	},
	revealjs: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/bower-components/reveal.js/js',
				src: 'reveal.js',
				dest: '<%= paths.dev %>/js/vendor'
			}
		]
	},
	ajax: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/ajax',
				src: '**/*.{json,html}',
				dest: '<%= paths.dev %>/ajax'
			}
		]
    },
	assets: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/assets',
				src: [
					'**/{,*/}*'
				],
				dest: '<%= paths.dev %>'
			}
		]
    }
};