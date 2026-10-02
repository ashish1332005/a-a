const http = require('http');
const handler = require('../server.js');
const { spawn } = require('child_process');
const fs = require('fs');

const server = http.createServer(handler);
server.listen(3002, () => {
  console.log('Test server running on port 3002');
  
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_hero2';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9575',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=412,915',
    'http://localhost:3002'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9575/json');
      const tabs = await listRes.json();
      const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);

      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const fixed = Array.from(document.querySelectorAll('.fixed'));
                fixed.forEach(el => el.remove());
                document.body.style.overflow = 'auto';
                window.scrollTo(0, 0);
              })()
            `
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 1200);
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 2) {
          fs.writeFileSync('d:/b8/scratch_hero_snap.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved hero screenshot to d:/b8/scratch_hero_snap.png');
          ws.close();
          chrome.kill();
          server.close();
          try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
          process.exit(0);
        }
      };
    } catch(e) {
      console.error('Error:', e);
      chrome.kill();
      server.close();
      process.exit(1);
    }
  }, 2500);
});
