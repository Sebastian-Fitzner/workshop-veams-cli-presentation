#### Configuration File

Veams needs a configuration file, which is referenced in your `package.json`. 

``` bash
  "veams": {
    "configFile": "helpers/config.js"
  }
```

In this config file we have all necessary options. 

#### Inserter

Furthermore Veams uses [`Inserter`](https://www.npmjs.com/package/inserter) which can insert any snippet into any file by using tags or ids in comments.