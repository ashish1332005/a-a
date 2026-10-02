const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let cur = fs.readFileSync(bundlePath, 'utf8');

const missingBlock = `const tV=1,nV="14c85bd5-d8fd-4897-b67a-eef5d9d15427",rV="3f9d9875-eabc-44df-87dc-3ba667b34959",sV="/__l5e/assets-v1/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",iV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",oV="villa-illustration.png",aV=860273,lV="image/png",cV="2026-08-01T20:47:38Z",IC={version:tV,asset_id:nV,project_id:rV,url:sV,r2_key:iV,original_filename:oV,size:aV,content_type:lV,created_at:cV},uV=1,dV="59745157-22d7-443c-8b72-353ad416e54c",fV="3f9d9875-eabc-44df-87dc-3ba667b34959",hV="/__l5e/assets-v1/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",pV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",mV="key-tassel.png",gV=148226,yV="image/webp",vV="2026-08-01T21:56:41Z",DC={version:uV,asset_id:dV,project_id:fV,url:hV,r2_key:pV,original_filename:mV,size:gV,content_type:yV,created_at:vV},Cx=[IC.url],wV=["w-72 md:w-[26rem]"],xV="https://maps.app.goo.gl/6PuohKkbUqTcSj56A";`;

if (!cur.includes('const tV=')) {
  const target = 'const _V=1,';
  const idx = cur.indexOf(target);
  if (idx !== -1) {
    cur = cur.substring(0, idx) + missingBlock + '\n' + cur.substring(idx);
    fs.writeFileSync(bundlePath, cur, 'utf8');
    console.log('Restored tV declaration block successfully!');
  } else {
    // If target not found, insert before function jV
    const jvIdx = cur.indexOf('function jV(');
    if (jvIdx !== -1) {
      cur = cur.substring(0, jvIdx) + missingBlock + '\n' + cur.substring(jvIdx);
      fs.writeFileSync(bundlePath, cur, 'utf8');
      console.log('Restored tV declaration block before jV!');
    }
  }
} else {
  console.log('tV is already defined.');
}
