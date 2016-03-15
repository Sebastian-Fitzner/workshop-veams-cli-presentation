But let us begin with the fun part. 

_One of the main benefits of Veams is that you can add many files with standard markup in a blink of an eye._

__These templates to generate your files are adaptable - WTF!__

Just add `blueprints` to your config file with the templates you want to override: 

``` bash
blueprints: {
    js: 'path-to-file/bp.js.ejs',
    data: 'path-to-file/bp.json.ejs',
    partial: 'path-to-file/bp.hbs.ejs',
    style: 'path-to-file/bp.scss.ejs',
    readme: 'path-to-file/bp.md.ejs'
}
```