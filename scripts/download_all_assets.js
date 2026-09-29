const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const url = require('url');

const baseUrl = 'https://template-bellagio.thedigitalyes.com';

const assetPaths = [
  '/assets/vase-left-DfaX_fU4.png',
  '/assets/vase-right-BfgTPz8l.png',
  '/assets/rsvp-confirmation-DYbKwzwP.webm',
  '/assets/index-PE0t8Bmj.js',
  '/assets/index-BPXRJLaN.css',
  '/favicon.ico',
  '/__l5e/assets-v1/adb06599-e8d7-40d0-948f-428a5c58000b/bellagio-2-final.jpg',
  '/__l5e/assets-v1/6c87cb97-b7d3-4fb8-ba21-e85149071fbe/bellagio-2.mp4',
  '/__l5e/assets-v1/64b280d9-d6a7-4868-b115-e2ba82d263a1/bellagio-2-poster.jpg',
  '/__l5e/assets-v1/49cfb347-e49e-485d-80db-e0e00fdb21ff/waltz-sentimental.mp3',
  '/__l5e/assets-v1/75c49b7d-4443-4c6d-b020-391eff93ee70/column-embroidery.png',
  '/__l5e/assets-v1/5f00c8fb-9224-49e9-93f2-9936e25e5082/details-embroidery-2.png',
  '/__l5e/assets-v1/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png',
  '/__l5e/assets-v1/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png',
  '/__l5e/assets-v1/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png',
  '/__l5e/assets-v1/14bfbc67-ecae-46ed-a71c-aa26e48df426/getting-there-embroidery.webp',
  '/__l5e/assets-v1/ea61ba68-bc94-4bdb-86ed-8c313742f115/hotel-bellagio.png',
  '/__l5e/assets-v1/80cec06e-0bb2-486d-8933-c33f778511a0/bedside-icon.png',
  '/__l5e/assets-v1/24d0fb52-5346-4d02-9af0-6b6f5e214fc2/corner-floral-embroidery.png',
  '/__l5e/assets-v1/00065bc3-5112-4ba3-98b7-9dc28634bb45/rsvp-lemon-icon-2.png'
];

function downloadFile(targetUrl, destPath) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const file = fs.createWriteStream(destPath);
    
    https.get(targetUrl, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        let redirectUrl = response.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = new URL(redirectUrl, targetUrl).toString();
        }
        return downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        return reject(new Error(`Failed to get '${targetUrl}' (${response.statusCode})`));
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          console.log(`✓ Downloaded: ${destPath} (${fs.statSync(destPath).size} bytes)`);
          resolve();
        });
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function main() {
  console.log(`Starting download of ${assetPaths.length} assets from ${baseUrl}...`);
  for (const relPath of assetPaths) {
    const fullUrl = baseUrl + relPath;
    const destPath = path.join(__dirname, relPath.replace(/^\//, '').replace(/\//g, path.sep));
    try {
      await downloadFile(fullUrl, destPath);
    } catch (err) {
      console.error(`✗ Error downloading ${relPath}: ${err.message}`);
    }
  }
  console.log('All downloads completed.');
}

main();
