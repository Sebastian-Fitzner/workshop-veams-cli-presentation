INSERTPOINT comments are used to identify areas in your files where snippets can be placed. 

#### Example of Insertpoint in Handlebars

``` hbs
<div class="main-section">
    \{{! @INSERTPOINT :: @ref: component-partial }}
</div>

<div class="footer-section">
    \{{! @INSERTPOINT :: @ref: slide-fox, @keep: false }}
</div>

```

#### Generic tags

Here are typical generic tags you can use in your project:

- Partials: `component-partial`, `block-partial`
- SCSS: `scss-import`
- JavaScript: `js-import`, `js-init-once-v3`, `js-init-once-v2`, `js-init-v3`, `js-init-v2`