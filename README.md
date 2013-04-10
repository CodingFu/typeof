# typeof

small node.js module that extends functionality of native typeof
inspired by Batman.js typeOf util

**-------------------------------**

**UPD:** now it returns lowercased name of any javascript class.

## Usage:

```bash
$ npm install typeof
```

```javascript
var typeOf = require('typeof');

console.log(typeOf("a string"));
console.log(typeOf([1, 2, 3, "array"]));
console.log(typeOf(null));
console.log(typeOf(new Buffer(0)));

function MyClass() {
  this.is = "class constructor"  
}
console.log(typeOf(new MyClass));
```

```
"string"
"array"
"null"
"buffer"
"myclass"
```
