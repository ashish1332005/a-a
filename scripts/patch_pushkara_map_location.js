const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const accurateMapsUrl = "https://www.google.com/maps/search/?api=1&query=Pushkara+Resort+and+Spa,+Pushkar,+Rajasthan+305022";

// Replace mapsUrl in VenueSection
bundle = bundle.replace(
  'const mapsUrl = "https://maps.app.goo.gl/6PuohKkbUqTcSj56A";',
  `const mapsUrl = "${accurateMapsUrl}";`
);

// Also replace xV
bundle = bundle.replace(
  'xV="https://maps.app.goo.gl/6PuohKkbUqTcSj56A"',
  `xV="${accurateMapsUrl}"`
);

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated Google Maps location URL for Pushkara Resort and Spa!');
