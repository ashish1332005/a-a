const fs = require('fs');
const path = require('path');

const jsContent = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');
const cssContent = fs.readFileSync(path.join(__dirname, 'index.css'), 'utf8');
const combined = jsContent + '\n' + cssContent;

const urlRegex = /https?:\/\/[^\s"'`<>)\\]+/g;
const allUrls = combined.match(urlRegex) || [];
const uniqueUrls = [...new Set(allUrls)];

console.log('All unique URLs:');
console.log(uniqueUrls);
