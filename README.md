# Metalsmith starter

Netlife Research Metalsmith starter for static site generator.

Install the package:
`npm i starter-metalsmith`

Require and run like this:
```javascript
var metalsmith = require('starter-metalsmith');
metalsmith.run('handlebars');`
```

### Template language
These language engine options are available
* [Handlebars](http://handlebarsjs.com/)
* [Twig](http://twig.sensiolabs.org/)
* [Jade](http://jade-lang.com/)
```javascript
metalsmith.run('option')
```

### Changing paths
If you want to change paths for Metalsmith, you pass an object to the `extendConfig`. This config is merged into the default config and will override the override properties with the same name in the default config.

```javascript
metalsmith.extendConfig({
    src: {
        content: 'your/path',
        layout: 'your/path',
        partials: 'your/path',
    },
    watch: 'your/path',
    dist: 'your/path'
});
```

### Dependencies
* Metalsmith
* Metalsmith layout
    * Handlebars
* Metalsmith markdown
* Metalsmith watch
