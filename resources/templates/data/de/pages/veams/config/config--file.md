In the configuration file you need to define an options object. 

The following lines are possible:

``` bash
var srcpath = 'resources'; 
var config = module.exports;

config.options = {
	paths: {
		// Veams config paths
		page: srcPath + '/templates/pages',
		global: srcPath + '/partials/globals',
		block: srcPath + '/partials/blocks',
		component: srcPath + '/partials/components',
		utility: srcPath + '/partials/utilities',
		scss: srcPath + '/scss',
		js: srcPath + '/js',
		endpoints: [
			srcPath + '/js/main.js',
			srcPath + '/templates/pages'
		],
		blueprints: {}
	}
};
```
