const fs = require('fs');
const s = fs.readFileSync('assets/index-PE0t8Bmj.js', 'utf8');

const k8Idx = s.indexOf('K8=');
console.log('K8 component:', s.substring(k8Idx, k8Idx + 600));

const sectionMatches = s.match(/id:\s*"[^"]+"/g) || [];
console.log('Section IDs:', sectionMatches);
