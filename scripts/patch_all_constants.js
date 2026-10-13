const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

// Replace mL definition
bundle = bundle.replace(/mL="[^"]+"/g, 'mL="/assets/wedding/mediterranean_villa_floral_arch.png?v=15"');

// Replace GF definition
bundle = bundle.replace(/GF="[^"]+"/g, 'GF="/assets/wedding/vintage_ivory_botanical_frame.png?v=15"');

// Replace Pt.heroBackground
bundle = bundle.replace(/Pt=\{heroBackground:[^,]+/g, 'Pt={heroBackground:"/assets/wedding/mediterranean_villa_floral_arch.png?v=15"');

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated all asset constants in bundle!');
