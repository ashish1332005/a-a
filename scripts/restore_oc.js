const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const ocDef = `const WF=1,HF="5f00c8fb-9224-49e9-93f2-9936e25e5082",KF="3f9d9875-eabc-44df-87dc-3ba667b34959",GF="/__l5e/assets-v1/5f00c8fb-9224-49e9-93f2-9936e25e5082/details-embroidery-2.png",qF="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/5f00c8fb-9224-49e9-93f2-9936e25e5082/details-embroidery-2.png",YF="details-embroidery-2.png",ZF=176406,QF="image/webp",XF="2026-08-01T21:37:52Z",OC={version:WF,asset_id:HF,project_id:KF,url:GF,r2_key:qF,original_filename:YF,size:ZF,content_type:QF,created_at:XF};\n`;

if (!bundle.includes('OC=')) {
  bundle = bundle.replace('function bV(){', ocDef + 'function bV(){');
  fs.writeFileSync(bundlePath, bundle, 'utf8');
  console.log('Restored OC definition before bV');
} else {
  console.log('OC definition already exists');
}
