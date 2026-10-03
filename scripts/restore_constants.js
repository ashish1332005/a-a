const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const restoreDefs = `
const tV=1,nV="14c85bd5-d8fd-4897-b67a-eef5d9d15427",rV="3f9d9875-eabc-44df-87dc-3ba667b34959",sV="/__l5e/assets-v1/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",iV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",oV="villa-illustration.png",aV=860273,lV="image/png",cV="2026-08-01T20:47:38Z",IC={version:tV,asset_id:nV,project_id:rV,url:sV,r2_key:iV,original_filename:oV,size:aV,content_type:lV,created_at:cV},uV=1,dV="59745157-22d7-443c-8b72-353ad416e54c",fV="3f9d9875-eabc-44df-87dc-3ba667b34959",hV="/__l5e/assets-v1/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",pV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",mV="key-tassel.png",gV=148226,yV="image/webp",vV="2026-08-01T21:56:41Z",DC={version:uV,asset_id:dV,project_id:fV,url:hV,r2_key:pV,original_filename:mV,size:gV,content_type:yV,created_at:vV},Cx=[IC.url],wV=["w-72 md:w-[26rem]"],xV="https://www.google.com/maps/search/?api=1&query=Pushkara+Resort+and+Spa,+Pushkar,+Rajasthan+305022";
const _V=1,SV="ac682b5b-4d77-408f-b7c9-227bee99656b",kV="3f9d9875-eabc-44df-87dc-3ba667b34959",EV="/__l5e/assets-v1/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",CV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",TV="dress-code-embroidery-2.png",RV=127586,PV="image/webp",NV="2026-08-01T21:36:04Z",MC={version:_V,asset_id:SV,project_id:kV,url:EV,r2_key:CV,original_filename:TV,size:RV,content_type:PV,created_at:NV};
`;

bundle = bundle.replace('function jV(){', restoreDefs + '\nfunction jV(){');
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully restored MC and IC definitions before jV!');
