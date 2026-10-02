const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9572', '--no-first-run', '--disable-gpu', 'http://localhost:3000']);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9572/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Runtime.enable' }));
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            expression: 'document.getElementById("root").innerHTML',
            returnByValue: true
          }
        }));
      }, 1000);
    };
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.method === 'Runtime.consoleAPICalled' || msg.method === 'Runtime.exceptionThrown') {
        console.log('CHROME LOG/ERR:', JSON.stringify(msg));
      }
      if (msg.id === 3) {
        console.log('ROOT HTML:', msg.result.result.value ? msg.result.result.value.substring(0, 400) : 'EMPTY');
        ws.close();
        chrome.kill();
        process.exit(0);
      }
    };
  } catch(err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
