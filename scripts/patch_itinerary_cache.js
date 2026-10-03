const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

bundle = bundle.replace(
  '/assets/wedding/itinerary_card_1.jpg?v=6',
  '/assets/wedding/itinerary_card_1.jpg?v=11'
);

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Updated cache buster for itinerary_card_1 in bundle!');
