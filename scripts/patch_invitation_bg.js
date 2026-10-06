const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

bundle = bundle.replace(
  'backgroundImage: "url(/assets/wedding/invitation_card_bg.jpg)",',
  'backgroundImage: "url(/assets/wedding/invitation_card_bg.jpg?v=8)",'
);

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated bV background in bundle!');
