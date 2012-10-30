# typeof

small node.js module that extends functionality of native typeof
inspired by Batman.js typeOf util

## Usage:

```bash
$ npm install typeof
```

```javascript
var typeOf = require('typeof');

console.log(typeOf("a string"));
console.log(typeOf([1, 2, 3, "array"]));
console.log(typeOf(null));
```

```
"string"
"array"
"null"
```
