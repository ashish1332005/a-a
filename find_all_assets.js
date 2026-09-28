const fs = require('fs');
const path = require('path');

const jsContent = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

// Find all asset paths like "/assets/...", "./assets/...", or strings ending in .png, .jpg, .webp, .svg, .mp4, .mp3, etc.
const assetRegex = /["'`](\/assets\/[^"'`]+|assets\/[^"'`]+|https?:\/\/[^"'`]+\.(?:png|jpe?g|webp|svg|gif|mp4|webm|mp3|wav|mov))["'`]/gi;
let match;
const foundAssets = new Set();
while ((match = assetRegex.exec(jsContent)) !== null) {
  foundAssets.add(match[1]);
}

// Also check for any generic path strings with extension
const extRegex = /["'`][^"'`\s]+\.(png|jpg|jpeg|webp|svg|gif|mp4|webm|mp3|wav|mov|woff2?)["'`]/gi;
while ((match = extRegex.exec(jsContent)) !== null) {
  foundAssets.add(match[0].slice(1, -1));
}

console.log('Found Asset references:', [...foundAssets]);
