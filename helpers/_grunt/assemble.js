module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/templates/data/**/*.{json,yml}',
		helpers: '<%= paths.src %>/templates/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templates/layouts/',
		layout: false,
		partials: [
			'<%= paths.src %>/templates/partials/**/*.hbs',
			'<%= paths.src %>/templates/layouts/tpl-default.hbs'
		],
		collections: [
			'Modules', 'Components', 'Layout'
		]
	},
	pages: {
		options: {},
		files: [{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	}
};