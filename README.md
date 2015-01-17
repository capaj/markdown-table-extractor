#markdown-table-extractor

Gets tables in a markdown document and returns at parsed by a lexer. If no tables are found, error is thrown.
```javascript
var tableExtractor = require('markdown-table-extractor');
...
var tables = tableExtractor(markdown);
console.log(tables)
```

