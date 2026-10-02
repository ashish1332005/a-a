const http = require('http');
const handler = require('../server.js');
const { spawn } = require('child_process');
const fs = require('fs');

const server = http.createServer(handler);
server.listen(3010, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_dom';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9583',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=412,915',
    'http://localhost:3010'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9583/json');
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
                const el = document.getElementById('dress-code');
                const rect = el ? el.getBoundingClientRect() : null;
                const totalY = el ? el.offsetTop : null;
                return JSON.stringify({ rect, totalY, windowHeight: window.innerHeight, docHeight: document.body.scrollHeight });
              })()
            `
          }
        }));
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 1) {
          console.log('DOM info:', msg.result.result.value);
          ws.close();
          chrome.kill();
          server.close();
          try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
          process.exit(0);
        }
      };
    } catch(e) {
      console.error(e);
      chrome.kill();
      server.close();
      process.exit(1);
    }
  }, 2500);
});
