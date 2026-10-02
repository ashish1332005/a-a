const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let cur = fs.readFileSync(bundlePath, 'utf8');

const ocBlock = `
const WF=1,HF="5f00c8fb-9224-49e9-93f2-9936e25e5082",KF="3f9d9875-eabc-44df-87dc-3ba667b34959",GF="/__l5e/assets-v1/5f00c8fb-9224-49e9-93f2-9936e25e5082/details-embroidery-2.png",qF="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/5f00c8fb-9224-49e9-93f2-9936e25e5082/details-embroidery-2.png",YF="details-embroidery-2.png",ZF=176406,QF="image/webp",XF="2026-08-01T21:37:52Z",OC={version:WF,asset_id:HF,project_id:KF,url:GF,r2_key:qF,original_filename:YF,size:ZF,content_type:QF,created_at:XF};
`;

if (!cur.includes('const WF=')) {
  const target = 'function bV(';
  const idx = cur.indexOf(target);
  if (idx !== -1) {
    cur = cur.substring(0, idx) + ocBlock + '\n' + cur.substring(idx);
    fs.writeFileSync(bundlePath, cur, 'utf8');
    console.log('Successfully restored OC definition block!');
  }
}
