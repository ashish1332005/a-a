const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const missingDefs = `
const _V=1,SV="ac682b5b-4d77-408f-b7c9-227bee99656b",kV="3f9d9875-eabc-44df-87dc-3ba667b34959",EV="/__l5e/assets-v1/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",CV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",TV="dress-code-embroidery-2.png",RV=127586,PV="image/webp",NV="2026-08-01T21:36:04Z",MC={version:_V,asset_id:SV,project_id:kV,url:EV,r2_key:CV,original_filename:TV,size:RV,content_type:PV,created_at:NV};
`;

// Insert right before function jV if not present
if (!bundle.includes('const _V=')) {
  const jvIdx = bundle.indexOf('function jV(');
  if (jvIdx !== -1) {
    bundle = bundle.substring(0, jvIdx) + missingDefs + '\n' + bundle.substring(jvIdx);
    console.log('Restored missing _V and MC definitions right before function jV');
  }
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Saved bundle with restored definitions.');
