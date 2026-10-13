const fs = require('fs');
const bundle = fs.readFileSync('assets/index-PE0t8Bmj.js', 'utf8');
const regex = /["']([^"']*(?:arch|Pastel|hero|villa|bellagio)[^"']*)["']/gi;
let match;
const results = new Set();
while ((match = regex.exec(bundle)) !== null) {
  results.add(match[1]);
}
console.log(Array.from(results));
