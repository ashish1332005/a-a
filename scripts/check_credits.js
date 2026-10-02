const fs = require('fs');
const s = fs.readFileSync('assets/index-PE0t8Bmj.js', 'utf8');

const queries = ['thedigitalyes', 'The Digital Yes', 'Digital Yes', 'Made with love by'];
queries.forEach(q => {
  let count = 0;
  let idx = 0;
  while ((idx = s.indexOf(q, idx)) !== -1) {
    count++;
    console.log(`Found "${q}" at index ${idx}:`, s.substring(Math.max(0, idx - 40), Math.min(s.length, idx + 80)));
    idx += q.length;
  }
  if (count === 0) {
    console.log(`"${q}" is completely absent from the bundle.`);
  }
});
