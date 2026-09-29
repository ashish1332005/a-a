const fs = require('fs');
const https = require('https');
const path = require('path');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https.get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        return downloadBinary(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      file.close();
      reject(err);
    });
  });
}

async function run() {
  console.log('Fetching typekit css...');
  const css = await fetchText('https://use.typekit.net/jzm0juw.css');
  fs.writeFileSync(path.join(__dirname, 'assets', 'typekit.css'), css);
  
  const fontUrls = css.match(/url\(([^)]+)\)/g) || [];
  console.log('Font URLs found:', fontUrls.length);
  
  let updatedCss = css;
  let idx = 0;
  for (const rawUrl of fontUrls) {
    const cleanUrl = rawUrl.replace(/url\(['"]?/, '').replace(/['"]?\)/, '');
    if (cleanUrl.startsWith('http')) {
      const ext = path.extname(new URL(cleanUrl).pathname) || '.woff2';
      const localFileName = `font-${idx}${ext}`;
      const localPath = path.join(__dirname, 'assets', 'fonts', localFileName);
      try {
        await downloadBinary(cleanUrl, localPath);
        console.log(`Downloaded font: ${localFileName}`);
        updatedCss = updatedCss.replace(cleanUrl, `/assets/fonts/${localFileName}`);
      } catch (e) {
        console.error(`Failed font ${cleanUrl}:`, e.message);
      }
      idx++;
    }
  }
  
  fs.writeFileSync(path.join(__dirname, 'assets', 'fonts.css'), updatedCss);
  console.log('Font processing complete.');
}

run();
