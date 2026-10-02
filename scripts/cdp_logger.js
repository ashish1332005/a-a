const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_profile';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9444',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9444/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');
    if (!pageTab) {
      console.log('No page tab found');
      return;
    }

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    ws.onopen = () => {
      console.log('Connected to Chrome DevTools Protocol!');
      ws.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
      ws.send(JSON.stringify({ id: 3, method: 'Page.enable' }));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('🔥 RUNTIME EXCEPTION THROWN IN BROWSER:', JSON.stringify(msg.params.exceptionDetails, null, 2));
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('📢 CONSOLE:', msg.params.type, msg.params.args.map(a => a.value || a.description).join(' '));
      } else if (msg.method === 'Log.entryAdded') {
        console.log('📝 LOG:', msg.params.entry.level, msg.params.entry.text);
      }
    };

    setTimeout(() => {
      ws.close();
      chrome.kill();
      try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
    }, 4000);
  } catch (err) {
    console.error('Error:', err);
    chrome.kill();
  }
}, 2000);
