const fs = require('fs');
const path = require('path');

let css = fs.readFileSync(path.join(__dirname, 'assets', 'index-BPXRJLaN.css'), 'utf8');
let js = fs.readFileSync(path.join(__dirname, 'assets', 'index-PE0t8Bmj.js'), 'utf8');

console.log('CSS length:', css.length);
console.log('JS length:', js.length);

// Let's check if there are any other network requests or API endpoints
const apiMatches = js.match(/https?:\/\/[a-zA-Z0-9_\-\.\:\/]+/g) || [];
console.log('API / external URLs in JS:', [...new Set(apiMatches)]);
