const http = require('http');
const handler = require('../server.js');
const { spawn } = require('child_process');
const fs = require('fs');

const server = http.createServer(handler);
server.listen(3003, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_logs';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9576',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=412,915',
    'http://localhost:3003'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9576/json');
      const tabs = await listRes.json();
      const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);

      const errors = [];
      ws.onopen = () => {
        ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
        ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.method === 'Runtime.exceptionThrown') {
          errors.push(msg.params.exceptionDetails);
        }
      };

      setTimeout(() => {
        console.log('Console Exceptions count:', errors.length);
        if (errors.length > 0) {
          console.error(JSON.stringify(errors, null, 2));
        } else {
          console.log('Zero runtime exceptions detected! Bundle is healthy.');
        }
        ws.close();
        chrome.kill();
        server.close();
        try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
        process.exit(errors.length > 0 ? 1 : 0);
      }, 2000);
    } catch(e) {
      console.error('Error:', e);
      chrome.kill();
      server.close();
      process.exit(1);
    }
  }, 2500);
});
