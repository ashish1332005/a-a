const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'index-BPXRJLaN.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace all occurrences of parfumerie-script with clean fonts
css = css.replace(/--font-display:\s*"parfumerie-script",\s*cursive/g, '--font-display: "Playfair Display", "Cinzel", "Cormorant Garamond", serif');
css = css.replace(/--font-script:\s*"parfumerie-script",\s*cursive/g, '--font-script: "Alex Brush", "Great Vibes", cursive');
css = css.replace(/font-family:\s*parfumerie-script,\s*cursive/g, 'font-family: "Alex Brush", "Great Vibes", cursive');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated assets/index-BPXRJLaN.css fonts!');
