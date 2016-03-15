module.exports = {
	libsassGlobbing: {
		options: {
			format: function (list, options, dest) {
				// just the index value
				var i = 0;
				// empty array which get be filled with our sass imports
				var imports = [];

				// loop to go through the items of array and build our pattern
				for (i; i < list.length; i++) {
					// single list element
					var listEl = list[i];
					// clean up our list element to get only the path and filename
					var listElName = listEl.replace(/_([^_]*)$/, ""+'$1').replace(/\.scss|\.sass/gi, "");
					// concatenate our cleaned up item with '@import ""' and add it to our imports array
					imports += '@import "' + listElName + '";\n';
				}

				// return the imports array
				return imports;
			}
		},
		files: [
			{
				// define your destination file
				dest: '<%= paths.src %>/scss/_all.scss',
				// define your current working directory in which the sass files are located
				cwd: '<%= paths.src %>/scss/',
				// here you can build your _all.scss like you would do in _all.scss with sass-globbing
				src: [
					'global/_reset.scss',
					'../bower-components/bourbon/app/assets/stylesheets/_bourbon.scss',
					'../bower-components/neat/app/assets/stylesheets/_neat.scss',
					'global/_vars.scss',
					'utils/extends/**/*.scss',
					'utils/mixins/**/*.scss',
					'global/_reveal.scss',
					'global/_base--beige.scss',
					'global/_base.scss',
					'components/**/*.scss',
					'modules/**/*.scss',
					'blocks/**/*.scss',
					'docs/**/*.scss',
					'icons/**/*.scss'
				]
			}
		]
	}
};