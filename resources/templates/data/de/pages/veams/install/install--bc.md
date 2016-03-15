You can also install bower-components which are based on our Veams blueprints.

``` bash
veams install bower-component [registry-name] [component-name] [type]
```
In short: 

``` bash
veams -i bc [registry-name] [component-name] [type]
```

#### Example

Let's say you have developed a custom slider. Then you created a blueprint, cleaned up the slider and publish this slider as bower-component. 

To install this you can type the following: 

``` bash
veams -i bc fitzner-slider slider component
```