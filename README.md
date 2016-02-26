# Metalsmith starter

Netlife Research Metalsmith starter for static site generator.

Install the package:
`npm i starter-metalsmith`

Require and run starter-metalsmith like this:
```javascript
var metalsmith = require('starter-metalsmith');
metalsmith.run();`
```

### Changing paths
If you want to change paths for Metalsmith, you pass an object to the `extendConfig`. This config is merged into the default config and will override the override properties with the same name in the default config.

Change urls like this:
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
