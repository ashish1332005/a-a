const fs = require('fs');
const bundle = fs.readFileSync('assets/index-PE0t8Bmj.js', 'utf8');
const urls = bundle.match(/\/assets\/[^\s"'<>]+/gi) || [];
console.log([...new Set(urls)]);
