const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

function handler(req, res) {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    if (pathname === '/' || pathname === '') {
      pathname = '/index.html';
    }

    let filePath = path.join(__dirname, pathname.replace(/^\//, '').replace(/\//g, path.sep));

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);

    const range = req.headers.range;
    if (range && ['.mp3', '.mp4', '.webm'].includes(ext)) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) {
        res.writeHead(416, { 'Content-Range': `bytes */${content.length}` });
        res.end();
        return;
      }

      const start = match[1] ? Number(match[1]) : Math.max(0, content.length - Number(match[2]));
      const end = match[2] && match[1] ? Math.min(Number(match[2]), content.length - 1) : content.length - 1;
      if (!Number.isSafeInteger(start) || start >= content.length || start > end) {
        res.writeHead(416, { 'Content-Range': `bytes */${content.length}` });
        res.end();
        return;
      }

      const chunk = content.subarray(start, end + 1);
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${content.length}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunk.length,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });
      res.end(chunk);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': content.length,
      'Access-Control-Allow-Origin': '*',
      ...(['.mp3', '.mp4', '.webm'].includes(ext) ? { 'Accept-Ranges': 'bytes' } : {})
    });
    res.end(content);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error: ' + err.message);
  }
}

// Local standalone server support
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  const server = http.createServer(handler);
  server.listen(PORT, () => {
    console.log(`✨ Server running at http://localhost:${PORT}`);
  });
}

// Export for Vercel Serverless Function runtime
module.exports = handler;
